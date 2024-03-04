export const setupMenuMobile = (collectionElementsByClass: HTMLCollectionOf<Element>) => {

    Array.from(collectionElementsByClass).forEach((el) => el.addEventListener('click', () => {
     
      const isShow = document.getElementById('hamburger')!.classList.contains('active');
      setTimeout(() => {
        toggleClassList(document.getElementById('bg-menu'), ['opacity-0', 'opacity-100', 'invisible']);
      }, !isShow ? 0 : 200)
      setTimeout(() => {
        toggleClassList(document.getElementById('hamburger'), ['active']);
        toggleClassList(document.getElementById('menu'), ['invisible','opacity-0', 'opacity-100']);
        toggleClassList(document.getElementById('search-container'), ['invisible','opacity-0', 'opacity-100','top-28','top-full']);
        toggleClassList(document.getElementById('bg-search'), ['h-20', 'h-0', 'opacity-5', 'bg-black']);
        toggleClassList(document.getElementById('icon-close'), ['invisible', 'opacity-0', 'opacity-100', '-translate-y-4']);
        toggleClassList(document.getElementById('icon-search'), ['visible', 'invisible', 'opacity-0', 'opacity-100', '-translate-y-4']);
        toggleClassList(document.getElementById('list-menu'), []);
        toggleClassList(document.getElementById('handle-navbar'), ['border-b']);
      },!isShow ? 200 : 0);
  
    }));
}
export const toggleClassList = (element: HTMLElement| null, classList: string[]) => element && classList.forEach((e) => element.classList.toggle(e))
  
setupMenuMobile(document.getElementsByClassName('handle-menu'));
setupMenuMobile(document.getElementsByClassName('handle-search'));