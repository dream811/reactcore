/*export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    }
  ]
};*/

export default {
  items: [
    {
      name: 'Welcome, Admin',
      url: '/base',
      icon: 'icon-user',
      children: [
        {
          name: 'My Account',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Log Out',
          url: '/base/cards',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      title: true,
      name: 'Accounting',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      }            // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Manage Account Type',
      url: '/manage-account-type',
      icon: 'icon-user',
      children: [
        {
          name: 'Add Account Type',
          url: '/manage-account-type/add-account-type',
          icon: 'icon-puzzle',
        },
        {
          name: 'Account Type List',
          url: '/manage-account-type/account-types',
          icon: 'icon-puzzle',
        }
      ],
    },
    {
      name: 'Manage Account',
      url: '/manage-account',
      icon: 'icon-user',
      children: [
        {
          name: 'Add Account',
          url: '/manage-account/add-account',
          icon: 'icon-puzzle',
        },
        {
          name: 'Accounts List',
          url: '/manage-account/accounts-list',
          icon: 'icon-puzzle',
        }
      ],
    },
    {
      title: true,
      name: 'Quick Link',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Make Payment',
      url: '/Quick Link/Make Payment',
      icon: 'icon-drop',
    },
    {
      name: 'Mortgagee Change',
      url: '/Quick Link/Mortgagee Change',
      icon: 'icon-pencil',
    },
    {
      name: 'Summary List',
      url: '/Quick Link/Summary List',
      icon: 'icon-speech',
    },
    {
      name: 'Quick Quote',
      url: '/Quick Link/Quick Quote',
      icon: 'icon-cursor',
    },
    {
      name: 'Avatar Training',
      url: '/Quick Link/Avatar Training',
      icon: 'icon-people',
    },
    {
      name: 'Underwriting Manuals',
      url: '/Quick Link/Underwriting Manuals',
      icon: 'icon-note',
    },
    {
      name: 'TimeSheet',
      url: '/Quick Link/TimeSheet',
      icon: 'icon-speedometer',
    },
    {
      name: 'Agent Statement',
      url: '/Quick Link/Agent Statement',
      icon: 'icon-calendar',
    },
    {
      name: 'Flood Quote',
      url: '/Quick Link/Flood Quote',
      icon: 'icon-drop',
    },
    {
      name: 'EPIC Policy',
      url: '/Quick Link/EPIC Policy',
      icon: 'icon-check',
    },
    {
      name: 'EPIC Policy IPX',
      url: '/Quick Link/EPIC Policy IPX',
      icon: 'icon-check',
    },
    {
      name: 'Desktop Link',
      url: '/Quick Link/Desktop Link',
      icon: 'icon-graph',
    },
    {
      name: 'Credit Card Payment Log',
      url: '/Quick Link/Credit Card Payment Log',
      icon: 'icon-credit-card',
    }
  ]
};

