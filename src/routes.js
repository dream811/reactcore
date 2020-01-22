import React from 'react';

const CodeEditors = React.lazy(() => import('./views/Editors/CodeEditors'));
const TextEditors = React.lazy(() => import('./views/Editors/TextEditors'));

const Compose = React.lazy(() => import('./views/Apps/Email/Compose'));
const Inbox = React.lazy(() => import('./views/Apps/Email/Inbox'));
const Message = React.lazy(() => import('./views/Apps/Email/Message'));
const Invoice = React.lazy(() => import('./views/Apps/Invoicing/Invoice'));

const AdvancedForms = React.lazy(() => import('./views/Forms/AdvancedForms'));
const BasicForms = React.lazy(() => import('./views/Forms/BasicForms'));
const ValidationForms = React.lazy(() => import('./views/Forms/ValidationForms'));
const GoogleMaps = React.lazy(() => import('./views/GoogleMaps'));
const Toastr = React.lazy(() => import('./views/Notifications/Toastr'));
const Calendar = React.lazy(() => import('./views/Plugins/Calendar'));
const Draggable = React.lazy(() => import('./views/Plugins/Draggable'));
const Spinners = React.lazy(() => import('./views/Plugins/Spinners'));
const DataTable = React.lazy(() => import('./views/Tables/DataTable'));
const Tables = React.lazy(() => import('./views/Tables/Tables'));
const LoadingButtons = React.lazy(() => import('./views/Buttons/LoadingButtons'));

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));

const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const SpinnersB4 = React.lazy(() => import('./views/Base/Spinners'));
const Switches = React.lazy(() => import('./views/Base/Switches'));

const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
////// Avatar Insurance System //////

const ProducerNavs = React.lazy(() => import('./Modules/Producer/ProducerNavs'));
const AddEditAccountType = React.lazy(() => import('./Modules/Accounting/ManageAccountType/AddEditAccountType'));
const AccountTypeList = React.lazy(() => import('./Modules/Accounting/ManageAccountType'));
const AddEditAccount = React.lazy(() => import('./Modules/Accounting/ManageAccount/AddEditAccount'));
const AccountsList = React.lazy(() => import('./Modules/Accounting/ManageAccount'));
// const Agency = React.lazy(() => import('./Modules/Producer/Agency'));
// const AgencyUsers = React.lazy(() => import('./Modules/Producer/AgencyUsers'));
// const Documents = React.lazy(() => import('./Modules/Producer/Documents'));
// const Commission = React.lazy(() => import('./Modules/Producer/Commission'));
// const Logs = React.lazy(() => import('./Modules/Producer/Logs'));
// const UpdatedLogs = React.lazy(() => import('./Modules/Producer/UpdatedLogs'));
// const AgencyVisitReview = React.lazy(() => import('./Modules/Producer/AgencyVisitReview'));
// const Association = React.lazy(() => import('./Modules/Producer/Association'));

const Claims = React.lazy(() => import('./views/Claims/Claims'));
const Claim = React.lazy(() => import('./views/Claims/Claim'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },

  { path: '/producer', name: 'Producer', component: ProducerNavs, exact: true },
  // { path: '/producer/agency', name: 'Agency', component: Agency },
  // { path: '/producer/agency-users', name: 'Agency Users', component: AgencyUsers },
  // { path: '/producer/documents', name: 'Documents', component: Documents },
  // { path: '/producer/commission', name: 'Commission', component: Commission },
  // { path: '/producer/logs', name: 'Logs', component: Logs },
  // { path: '/producer/updated-logs', name: 'Updated Logs', component: UpdatedLogs },
  // { path: '/producer/agency-visit-review', name: 'Agency Visit Review', component: AgencyVisitReview },
  // { path: '/producer/association', name: 'Association', component: Association },

  { path: '/claims', exact: true,  name: 'Claims', component: Claims },
  { path: '/claims/:id', exact: true, name: 'Claim Details', component: Claim },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/manage-account-type', name: 'Manage Account Type', component: AddEditAccountType, exact: true },
  { path: '/manage-account-type/add-account-type', name: 'Add Account Type', component: AddEditAccountType },
  { path: '/manage-account-type/edit-account-type/:id', name: 'Edit Account Type', component: AddEditAccountType },
  { path: '/manage-account-type/account-types', name: 'Account Type List', component: AccountTypeList },
  { path: '/manage-account', name: 'Manage Account', component: AddEditAccount, exact: true },
  { path: '/manage-account/add-account', name: 'Add Account', component: AddEditAccount },
  { path: '/manage-account/edit-account/:id', name: 'Edit Account', component: AddEditAccount },
  { path: '/manage-account/accounts-list', name: 'Accounts List', component: AccountsList },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
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
  { path: '/base/spinners', name: 'Spinners', component: SpinnersB4 },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/buttons/loading-buttons', name: 'Loading Buttons', component: LoadingButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/editors', name: 'Editors', component: CodeEditors, exact: true },
  { path: '/editors/code-editors', name: 'Code Editors', component: CodeEditors },
  { path: '/editors/text-editors', name: 'Text Editors', component: TextEditors },
  { path: '/forms', name: 'Forms', component: BasicForms, exact: true },
  { path: '/forms/advanced-forms', name: 'Advanced Forms', component: AdvancedForms },
  { path: '/forms/basic-forms', name: 'Basic Forms', component: BasicForms },
  { path: '/forms/validation-forms', name: 'Form Validation', component: ValidationForms },
  { path: '/google-maps', name: 'Google Maps', component: GoogleMaps },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toastr', name: 'Toastr', component: Toastr },
  { path: '/plugins', name: 'Plugins', component: Calendar, exact: true },
  { path: '/plugins/calendar', name: 'Calendar', component: Calendar },
  { path: '/plugins/draggable', name: 'Draggable Cards', component: Draggable },
  { path: '/plugins/spinners', name: 'Spinners', component: Spinners },
  { path: '/tables', name: 'Tables', component: Tables, exact: true },
  { path: '/tables/data-table', name: 'Data Table', component: DataTable },
  { path: '/tables/tables', name: 'Tables', component: Tables },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/apps', name: 'Apps', component: Compose, exact: true },
  { path: '/apps/email', name: 'Email', component: Compose, exact: true },
  { path: '/apps/email/compose', name: 'Compose', component: Compose },
  { path: '/apps/email/inbox', name: 'Inbox', component: Inbox },
  { path: '/apps/email/message', name: 'Message', component: Message },
  { path: '/apps/invoicing', name: 'Invoice', component: Invoice, exact: true },
  { path: '/apps/invoicing/invoice', name: 'Invoice', component: Invoice },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
