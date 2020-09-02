import MenuService from "../../../packages/Post/services/MenuService";
import PostService from "../../../packages/Post/services/PostService";

export const mainInitialProps = () => {
  let menu = null;
  
  try{
    let menuService = new MenuService();
    menu = menuService.get(1);
  }
  catch(e) {
    // non fare nulla
  }
  
  return {
    menu
  }
}