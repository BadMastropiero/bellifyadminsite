import React, {Fragment} from 'react';

const Breadcrumbs = React.lazy(() => import('./ui/pages/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./ui/pages/Base/Cards'));
const PayMethods = React.lazy(() => import('./ui/pages/Base/PayMethod/payMethod'));
const Checkout = React.lazy(() => import('./ui/pages/Base/Checkout/checkout'));
const Modal = React.lazy(() => import('./ui/pages/Base/Modal/modal'));
const SetupPayMethod = React.lazy(() => import('./ui/pages/Base/SetupPayMethod/setupPayMethod'));
const Popus = React.lazy(() => import('./ui/pages/Base/Pop-ups/pop-ups'));
const Shipping = React.lazy(() => import('./ui/pages/Base/Shipping/shipping'));
const MyAccount = React.lazy(() => import('./ui/pages/Base/MyAccount/myAccount'));
const ModalBill = React.lazy(() => import('./ui/pages/Base/Bill/modalBill'));
const PaymentServices = React.lazy(() => import('./ui/pages/Base/PaymentsAndServices/modalPaymentServices'));
const MonthlyPayments = React.lazy(() => import('./ui/pages/Base/MonthlyPayments/monthlyPayments'));
const AnnualPayments = React.lazy(() => import('./ui/pages/Base/AnnualPayments/annualPayments'));
const SalesChannels = React.lazy(() => import('./ui/pages/Base/SalesChannels/salesChannels'));
const PlansPermissions = React.lazy(() => import('./ui/pages/Base/PlansPermissions/PlansPermissions'));
const Facturation = React.lazy(() => import('./ui/pages/Base/Facturation/Facturation'));
const SentFacturation = React.lazy(() => import('./ui/pages/Base/SentFacture/sentFacture'));
const ModalFacture = React.lazy(() => import('./ui/pages/Base/ModalFacture/ModalFacture'));
const Emails = React.lazy(() => import('./ui/pages/Base/Emails/Emails'));
const EmailType = React.lazy(() => import('./ui/pages/Base/EmailType/EmailType'));
const EmailView = React.lazy(() => import('./ui/pages/Base/EmailView/EmailView'));
const Carousels = React.lazy(() => import('./ui/pages/Base/Carousels'));
const Collapses = React.lazy(() => import('./ui/pages/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./ui/pages/Base/Dropdowns'));
const Forms = React.lazy(() => import('./ui/pages/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./ui/pages/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./ui/pages/Base/ListGroups'));
const Navbars = React.lazy(() => import('./ui/pages/Base/Navbars'));
const Navs = React.lazy(() => import('./ui/pages/Base/Navs'));
const Paginations = React.lazy(() => import('./ui/pages/Base/Paginations'));
const Popovers = React.lazy(() => import('./ui/pages/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./ui/pages/Base/ProgressBar'));
const Switches = React.lazy(() => import('./ui/pages/Base/Switches'));
const Tables = React.lazy(() => import('./ui/pages/Base/Tables'));
const Tabs = React.lazy(() => import('./ui/pages/Base/Tabs'));
const Tooltips = React.lazy(() => import('./ui/pages/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./ui/pages/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./ui/pages/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./ui/pages/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./ui/pages/Buttons/Buttons'));
const Charts = React.lazy(() => import('./ui/pages/Charts'));
// const Dashboard = React.lazy(() => import('./ui/pages/Dashboard'));
const Dashboard = () => <Fragment></Fragment>;
const CoreUIIcons = React.lazy(() => import('./ui/pages/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./ui/pages/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./ui/pages/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./ui/pages/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./ui/pages/Notifications/Alerts'));
const Badges = React.lazy(() => import('./ui/pages/Notifications/Badges'));
const Modals = React.lazy(() => import('./ui/pages/Notifications/Modals'));
const Colors = React.lazy(() => import('./ui/pages/Theme/Colors'));
const Typography = React.lazy(() => import('./ui/pages/Theme/Typography'));
const Widgets = React.lazy(() => import('./ui/pages/Widgets/Widgets'));
const Users = React.lazy(() => import('./ui/pages/Users/Users'));
const User = React.lazy(() => import('./ui/pages/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/todo', name: 'Cards', component: Cards },
  { path: '/pay-method', name: 'Cards', component: PayMethods },
  { path: '/checkout', name: 'Cards', component: Checkout },
  { path: '/base/modal', name: 'Cards', component: Modal },
  { path: '/base/setupPayMethod', name: 'Cards', component: SetupPayMethod },
  { path: '/popus', name: 'Cards', component: Popus },
  { path: '/shipping', name: 'Cards', component: Shipping },
  { path: '/my-account', name: 'Cards', component: MyAccount },
  { path: '/modalBill', name: 'Cards', component: ModalBill },
  { path: '/paymentServices', name: 'Cards', component: PaymentServices },
  { path: '/monthlyPayments', name: 'Cards', component: MonthlyPayments },
  { path: '/annualPayments', name: 'Cards', component: AnnualPayments },
  { path: '/sales-channels', name: 'Cards', component: SalesChannels },
  { path: '/plans-permissions', name: 'PlansPermissions', component: PlansPermissions },
  { path: '/facturation', name: 'Facturation', component: Facturation },
  { path: '/sentfacturation', name: 'SentFacturation', component: SentFacturation },
  { path: '/modalfacture', name: 'ModalFacture', component: ModalFacture },
  { path: '/emails', name: 'Emails', component: Emails },
  { path: '/emailtype', name: 'EmailType', component: EmailType },
  { path: '/emailview', name: 'EmailView', component: EmailView },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
