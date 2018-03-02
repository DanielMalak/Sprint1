import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  { title: 'Dashboard', icon: 'nb-home', link: '/dashboard', home: true },
  {
    title: 'Items',
    icon: 'fa fa-shopping-basket',
    link: '/dashboard/items'
  },
  {
  title: 'store',
  icon: '	fa fa-shopping-bag',
children:[
  {
    title: 'TheStore',
    link: '/dashboard/store/the-store'
  },{
  title: 'MyItems',
  link: '/dashboard/store/my-items'
}
]}];
