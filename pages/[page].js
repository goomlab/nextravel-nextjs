import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import PostService from '../packages/Post/services/PostService';

import Layout from '../components/Layouts/MainLayout/MainLayout';
import HomePageTemplate from '../components/Templates/HomePageTemplate';
import BlankPageTemplate from '../components/Templates/BlankPageTemplate';

const Page = (props) => {
  if( !props.data || props.data.length <= 0 ){
    return(
      <Layout>
        <div>404 - Page not found</div>
      </Layout>
    );
  }

  switch( props.data.template ){
    case 'home':
      return <HomePageTemplate {...props}/>
    default:
      return <BlankPageTemplate {...props} />
  }

  // return(
  //   <Layout>
  //     <div>
  //       <h3>[PAGE] Template</h3>
  //       <h2>{props.data.title.it}</h2>
  //       <p>
  //         id: {props.data.id}
  //       </p>
  //       <p>
  //         {props.data.content.it}
  //       </p>
  //     </div>
  //   </Layout>
  // )
}

Page.getInitialProps = async (params) => {
  console.log('Page Slug get', params.query);
  let data = null;
  try {
    let postService = new PostService();
    data = await postService.getBySlug(params.query.page);
    console.log('Page Slug result', data);
    if (!data) {
      const err = new Error()
      err.code = 'ENOENT'
      throw err
    }
  }
  catch(e) {
    console.log('Page Slug Error', e);
    data = null;
  }

  return {
    data: data
  }
}

export default Page;