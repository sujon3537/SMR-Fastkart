import paris from "../../public/assets/images/themes/01.jpg";
import tokyo from "../../public/assets/images/themes/02.jpg";
import osaka from "../../public/assets/images/themes/03.jpg";
import rome from "../../public/assets/images/themes/04.jpg";
import madrid from "../../public/assets/images/themes/05.jpg";
import berlin from "../../public/assets/images/themes/06.jpg";
import denver from "../../public/assets/images/themes/07.jpg";
import comingSoon from "../../public/assets/images/themes/08.jpg";

export const headerMenu = [
  {
    id: 1,
    title: "Men",
    styleType: "link",
    slider: "product",
    customChildren: true,
    children: [
      {
        column: [
          {
            title: "CollectionLayouts",
            type: "sub",
          },
          {
            title: "CollectionLeftSidebar",
            path: "collections",
            params: { layout: "collection_left_sidebar" },
            labelx: "Hot",
            labelxClass: "warning-labelx",
          },
          {
            title: "CollectionRightSidebar",
            path: "collections",
            params: { layout: "collection_right_sidebar" },
          },
          {
            title: "CollectionNoSidebar",
            path: "collections",
            params: { layout: "collection_no_sidebar" },
          },
          {
            title: "Collection3Grid",
            path: "collections",
            params: { layout: "collection_3_grid" },
          },
          {
            title: "Collection4Grid",
            path: "collections",
            params: { layout: "collection_4_grid" },
            labelx: "New",
          },
          {
            title: "Collection5Grid",
            path: "collections",
            params: { layout: "collection_5_grid" },
          },
          {
            title: "CollectionListView",
            path: "collections",
            params: { layout: "collection_list_view" },
          },
        ],
      },
      {
        column: [
          {
            title: "CollectionLayouts",
            type: "sub",
          },
          {
            title: "CategorySlider",
            path: "collections",
            params: { layout: "collection_category_slider" },
          },
          {
            title: "CategorySidebar",
            path: "collections",
            labelx: "New",
            params: { layout: "collection_category_sidebar" },
          },
          {
            title: "CategoryBanner",
            path: "collections",
            params: { layout: "collection_banner" },
          },
          {
            title: "OffCanvasFilter",
            path: "collections",
            params: { layout: "collection_offcanvas_filter" },
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Women",
    styleType: "link",
    slider: "banner",
    customChildren: true,
    children: [
      {
        column: [
          {
            title: "ProductPages",
            type: "sub",
          },
          {
            title: "ProductThumbnail",
            path: "product/deliciously-sweet-watermelon",
            params: { layout: "product_thumbnail" },
          },
          {
            title: "ProductImages",
            path: "product/deliciously-sweet-watermelon",
            params: { layout: "product_images" },
          },
          {
            title: "ProductSlider",
            path: "product/deliciously-sweet-watermelon",
            params: { layout: "product_slider" },
          },
          {
            title: "ProductSticky",
            path: "product/deliciously-sweet-watermelon",
            params: { layout: "product_sticky" },
            labelxClass: "warning-labelx",
          },
          {
            title: "ProductAccordion",
            path: "product/deliciously-sweet-watermelon",
            params: { layout: "product_accordion" },
          },
          {
            title: "ProductTab",
            path: "product/deliciously-sweet-watermelon",
            type: "link",
          },
        ],
      },
      {
        column: [
          {
            title: "ProductVariantsStyle",
            type: "sub",
          },
          {
            title: "VariantRectangle",
            path: "product/organic-oranges",
            type: "link",
          },
          {
            title: "VariantCircle",
            type: "link",
            path: "product/solid-hooded-sweatshirt",
            labelx: "New",
          },
          {
            title: "VariantImagesWatch",
            path: "product/relaxed-fit-hoodie",
            type: "link",
          },
          {
            title: "VariantColor",
            path: "product/premium-blazer",
            type: "link",
          },
          {
            title: "VariantRadioButton",
            path: "product/women-flared-jeans",
            type: "link",
          },
          {
            title: "VariantDropdown",
            path: "product/fresh-and-pure-oil",
            type: "link",
          },
        ],
      },
      {
        column: [
          {
            title: "ProductFeatures",
            type: "sub",
          },
          {
            title: "ProductSimple",
            path: "product/deliciously-sweet-strawberry",
            type: "link",
          },
          {
            title: "ProductClassified",
            path: "product/deliciously-sweet-watermelon",
            type: "link",
            params: { layout: "product_thumbnail" },
            labelx: "New",
          },
          {
            title: "SizeChart",
            type: "link",
            path: "product/solid-hooded-sweatshirt",
            labelx: "New",
          },
          {
            title: "DeliveryAndReturn",
            path: "product/relaxed-fit-hoodie",
            type: "link",
          },
          {
            title: "PaymentTrustBadges",
            path: "product/delicious-exquisite-cake",
            type: "link",
          },
          {
            title: "AskAnExpert",
            path: "product/premium-blazer",
            type: "link",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Kids",
    styleType: "link",
    slider: "product",
    customChildren: true,
    children: [
      {
        column: [
          {
            title: "CollectionLayouts",
            type: "sub",
          },
          {
            title: "CollectionLeftSidebar",
            path: "collections",
            params: { layout: "collection_left_sidebar" },
            labelx: "Hot",
            labelxClass: "warning-labelx",
          },
          {
            title: "CollectionRightSidebar",
            path: "collections",
            params: { layout: "collection_right_sidebar" },
          },
          {
            title: "CollectionNoSidebar",
            path: "collections",
            params: { layout: "collection_no_sidebar" },
          },
          {
            title: "Collection3Grid",
            path: "collections",
            params: { layout: "collection_3_grid" },
          },
          {
            title: "Collection4Grid",
            path: "collections",
            params: { layout: "collection_4_grid" },
            labelx: "New",
          },
          {
            title: "Collection5Grid",
            path: "collections",
            params: { layout: "collection_5_grid" },
          },
          {
            title: "CollectionListView",
            path: "collections",
            params: { layout: "collection_list_view" },
          },
        ],
      },
      {
        column: [
          {
            title: "CollectionLayouts",
            type: "sub",
          },
          {
            title: "CategorySlider",
            path: "collections",
            params: { layout: "collection_category_slider" },
          },
          {
            title: "CategorySidebar",
            path: "collections",
            labelx: "New",
            params: { layout: "collection_category_sidebar" },
          },
          {
            title: "CategoryBanner",
            path: "collections",
            params: { layout: "collection_banner" },
          },
          {
            title: "OffCanvasFilter",
            path: "collections",
            params: { layout: "collection_offcanvas_filter" },
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Bags",
    styleType: "link",
    slider: "banner",
    customChildren: true,
    children: [
      {
        column: [
          {
            title: "ProductPages",
            type: "sub",
          },
          {
            title: "Backpack",
            path: "product/",
            type: "link",
          },
          {
            title: "Laptop Bag",
            path: "product/",
            type: "link",
          },
          {
            title: "Fanny Bag",
            path: "product/",
            type: "link",
          },
        ],
      },
      {
        column: [
          {
            title: "ProductVariantsStyle",
            type: "sub",
          },
          {
            title: "Office Bag",
            path: "product/",
            type: "link",
          },
          {
            title: "Executive Bag",
            type: "link",
            path: "product/",
            labelx: "New",
          },
        ],
      },
      {
        column: [
          {
            title: "ProductFeatures",
            type: "sub",
          },
          {
            title: "Messenger Bag",
            type: "link",
            path: "product/",
            labelx: "New",
          },
          {
            title: "Duffel Bag",
            path: "product/",
            type: "link",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Accessories",
    styleType: "link",
    slider: "product",
    customChildren: true,
    children: [
      {
        column: [
          {
            title: "CollectionLayouts",
            type: "sub",
          },
          {
            title: "Leather Gloves",
            path: "collections",
            labelx: "Hot",
            labelxClass: "warning-labelx",
          },
          {
            title: "File Folder",
            path: "collections",
          },
          {
            title: "Key Holder",
            path: "collections",
            labelx: "New",
          },
          {
            title: "Leather Muffler",
            path: "collections",
          },
          {
            title: "Pen Holder",
            path: "collections",
          },
          {
            title: "Sunglass Cover",
            path: "collections",
          },
        ],
      },
      {
        column: [
          {
            title: "CollectionLayouts",
            type: "sub",
          },
          {
            title: "Laptop Pouch",
            path: "collections",
          },
          {
            title: "Mobile Pouch",
            path: "collections",
            labelx: "New",
          },
          {
            title: "Passport Cover",
            path: "collections",
          },
          {
            title: "Leather Sock",
            path: "collections",
          },
          {
            title: "Passport Cover",
            path: "collections",
          },
          {
            title: "Leather Care",
            path: "collections",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Blog",
    styleType: "link",
    customChildren: true,
    slider: "blog",
    children: [
      {
        column: [
          {
            title: "BlogPages",
            type: "sub",
          },
          {
            title: "BlogList",
            type: "link",
            path: "blogs",
            params: { style: "list_view", sidebar: "left_sidebar" },
            labelx: "New",
          },
          {
            title: "GridLeftSidebar",
            type: "link",
            labelx: "Hot",
            path: "blogs",
            params: { style: "grid_view", sidebar: "left_sidebar" },
            labelxClass: "warning-labelx",
          },
          {
            title: "GridRightSidebar",
            type: "link",
            path: "blogs",
            params: { style: "grid_view", sidebar: "right_sidebar" },
          },
          {
            title: "GridNoSidebar",
            type: "link",
            path: "blogs",
            params: { style: "grid_view", sidebar: "no_sidebar" },
          },
          {
            title: "BlogDetails",
            path: "blogs/supercharge-your-meals-incorporating-colorful-vegetables-and-fruits",
            type: "link",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Custom Order",
    customChildren: false,
    children: [
      {
        title: "Custom Leather Product",
        type: "link",
        path: "/custom-leather-product",
      },
      {
        title: "Leather Gifts",
        type: "link",
        path: "/leather-gifts",
      },
      {
        title: "Corporate Leather Items",
        type: "link",
        path: "/corporate-leather-items",
      },
      {
        title: "Hand made Leather Products",
        type: "link",
        path: "/hand-made-leather-products",
      },
      {
        title: "Account",
        type: "sub",
        children: [
          {
            title: "MyDashboard",
            path: "/account/dashboard",
            type: "link",
          },
          {
            title: "MyNotifications",
            path: "/account/notification",
            type: "link",
          },
          {
            title: "MyAddresses",
            path: "/account/addresses",
            type: "link",
          },
          {
            title: "MyWallet",
            path: "/account/wallet",
            type: "link",
          },
          {
            title: "MyPoints",
            path: "/account/point",
            type: "link",
          },
          {
            title: "MyOrders",
            path: "/account/order",
            type: "link",
          },
          {
            title: "OrderDetails",
            path: "/account/order/details/1000",
            type: "link",
          },
          {
            title: "RefundHistory",
            path: "/account/refund",
            type: "link",
          },
          {
            title: "PayoutDetails",
            path: "/account/bank-details",
            type: "link",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "About Us",
    children: [
      {
        title: "About Us",
        path: "/",
      },
      {
        title: "Contact Us",
        path: "/",
      },
      {
        title: "Our Team",
        path: "/",
      },
    ],
  },
  // {
  //   id: 1,
  //   title: 'Home',
  //   styleType: 'image',
  //   customChildren: true,
  //   children: [
  //     {
  //       title: 'Paris',
  //       path: '/theme/paris',
  //       image: paris,
  //     },
  //     {
  //       title: 'Tokyo',
  //       path: '/theme/tokyo',
  //       image: tokyo,
  //     },
  //     {
  //       title: 'Osaka',
  //       path: '/theme/osaka',
  //       image: osaka,
  //     },
  //     {
  //       title: 'Rome',
  //       path: '/theme/rome',
  //       image: rome,
  //     },
  //     {
  //       title: 'Madrid',
  //       path: '/theme/madrid',
  //       image: madrid,
  //     },
  //     {
  //       title: 'Berlin',
  //       path: '/theme/berlin',
  //       image: berlin,
  //     },
  //     {
  //       title: 'Denver',
  //       path: '/theme/denver',
  //       image: denver,
  //     },
  //     {
  //       title: '',
  //       path: '',
  //       image: comingSoon,
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   title: "Collection",
  //   styleType: "link",
  //   slider: "product",
  //   customChildren: true,
  //   children: [
  //     {
  //       column: [
  //         {
  //           title: "CollectionLayouts",
  //           type: "sub",
  //         },
  //         {
  //           title: "CollectionLeftSidebar",
  //           path: "collections",
  //           params: { layout: "collection_left_sidebar" },
  //           labelx: "Hot",
  //           labelxClass: "warning-labelx",
  //         },
  //         {
  //           title: "CollectionRightSidebar",
  //           path: "collections",
  //           params: { layout: "collection_right_sidebar" },
  //         },
  //         {
  //           title: "CollectionNoSidebar",
  //           path: "collections",
  //           params: { layout: "collection_no_sidebar" },
  //         },
  //         {
  //           title: "Collection3Grid",
  //           path: "collections",
  //           params: { layout: "collection_3_grid" },
  //         },
  //         {
  //           title: "Collection4Grid",
  //           path: "collections",
  //           params: { layout: "collection_4_grid" },
  //           labelx: "New",
  //         },
  //         {
  //           title: "Collection5Grid",
  //           path: "collections",
  //           params: { layout: "collection_5_grid" },
  //         },
  //         {
  //           title: "CollectionListView",
  //           path: "collections",
  //           params: { layout: "collection_list_view" },
  //         },
  //       ],
  //     },
  //     {
  //       column: [
  //         {
  //           title: "CollectionLayouts",
  //           type: "sub",
  //         },
  //         {
  //           title: "CategorySlider",
  //           path: "collections",
  //           params: { layout: "collection_category_slider" },
  //         },
  //         {
  //           title: "CategorySidebar",
  //           path: "collections",
  //           labelx: "New",
  //           params: { layout: "collection_category_sidebar" },
  //         },
  //         {
  //           title: "CategoryBanner",
  //           path: "collections",
  //           params: { layout: "collection_banner" },
  //         },
  //         {
  //           title: "OffCanvasFilter",
  //           path: "collections",
  //           params: { layout: "collection_offcanvas_filter" },
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   title: "Product",
  //   styleType: "link",
  //   slider: "banner",
  //   customChildren: true,
  //   children: [
  //     {
  //       column: [
  //         {
  //           title: "ProductPages",
  //           type: "sub",
  //         },
  //         {
  //           title: "ProductThumbnail",
  //           path: "product/deliciously-sweet-watermelon",
  //           params: { layout: "product_thumbnail" },
  //         },
  //         {
  //           title: "ProductImages",
  //           path: "product/deliciously-sweet-watermelon",
  //           params: { layout: "product_images" },
  //         },
  //         {
  //           title: "ProductSlider",
  //           path: "product/deliciously-sweet-watermelon",
  //           params: { layout: "product_slider" },
  //         },
  //         {
  //           title: "ProductSticky",
  //           path: "product/deliciously-sweet-watermelon",
  //           params: { layout: "product_sticky" },
  //           labelxClass: "warning-labelx",
  //         },
  //         {
  //           title: "ProductAccordion",
  //           path: "product/deliciously-sweet-watermelon",
  //           params: { layout: "product_accordion" },
  //         },
  //         {
  //           title: "ProductTab",
  //           path: "product/deliciously-sweet-watermelon",
  //           type: "link",
  //         },
  //         {
  //           title: "ProductFeatures",
  //           colHeadClass: "custom-mt",
  //           type: "sub",
  //         },
  //         {
  //           title: "BundleCrossSale",
  //           path: "product/high-quality-bookshelves",
  //         },
  //         {
  //           title: "HotStockProgress",
  //           path: "product/mini-bodycon-dress",
  //           labelx: "New",
  //         },
  //         {
  //           title: "SoldOut",
  //           path: "product/solid-collared-tshirts",
  //         },
  //         {
  //           title: "SaleCountdown",
  //           path: "product/men-gym-co-ord-set",
  //         },
  //         {
  //           title: "ProductZoom",
  //           path: "product/deliciously-sweet-watermelon",
  //         },
  //       ],
  //     },
  //     {
  //       column: [
  //         {
  //           title: "ProductVariantsStyle",
  //           type: "sub",
  //         },
  //         {
  //           title: "VariantRectangle",
  //           path: "product/organic-oranges",
  //           type: "link",
  //         },
  //         {
  //           title: "VariantCircle",
  //           type: "link",
  //           path: "product/solid-hooded-sweatshirt",
  //           labelx: "New",
  //         },
  //         {
  //           title: "VariantImagesWatch",
  //           path: "product/relaxed-fit-hoodie",
  //           type: "link",
  //         },
  //         {
  //           title: "VariantColor",
  //           path: "product/premium-blazer",
  //           type: "link",
  //         },
  //         {
  //           title: "VariantRadioButton",
  //           path: "product/women-flared-jeans",
  //           type: "link",
  //         },
  //         {
  //           title: "VariantDropdown",
  //           path: "product/fresh-and-pure-oil",
  //           type: "link",
  //         },
  //         {
  //           title: "ProductFeatures",
  //           colHeadClass: "custom-mt",
  //           type: "sub",
  //         },
  //         {
  //           title: "StickyCheckout",
  //           path: "product/elegant-and-durable-bed",
  //           type: "link",
  //         },
  //         {
  //           title: "DynamicCheckout",
  //           type: "link",
  //           path: "product/solid-polo-tshirt",
  //           labelxClass: "warning-labelx",
  //         },
  //         {
  //           title: "SecureCheckout",
  //           path: "product/premium-dumbbells",
  //           type: "link",
  //         },
  //         {
  //           title: "ActiveProductView",
  //           path: "product/organic-long-grain-rice",
  //           type: "link",
  //         },
  //         {
  //           title: "ActiveLastOrders",
  //           path: "product/delicious-cupcakes",
  //           type: "link",
  //         },
  //       ],
  //     },
  //     {
  //       column: [
  //         {
  //           title: "ProductFeatures",
  //           type: "sub",
  //         },
  //         {
  //           title: "ProductSimple",
  //           path: "product/deliciously-sweet-strawberry",
  //           type: "link",
  //         },
  //         {
  //           title: "ProductClassified",
  //           path: "product/deliciously-sweet-watermelon",
  //           type: "link",
  //           params: { layout: "product_thumbnail" },
  //           labelx: "New",
  //         },
  //         {
  //           title: "SizeChart",
  //           type: "link",
  //           path: "product/solid-hooded-sweatshirt",
  //           labelx: "New",
  //         },
  //         {
  //           title: "DeliveryAndReturn",
  //           path: "product/relaxed-fit-hoodie",
  //           type: "link",
  //         },
  //         {
  //           title: "PaymentTrustBadges",
  //           path: "product/delicious-exquisite-cake",
  //           type: "link",
  //         },
  //         {
  //           title: "AskAnExpert",
  //           path: "product/premium-blazer",
  //           type: "link",
  //         },
  //         {
  //           title: "ProductFeatures",
  //           colHeadClass: "custom-mt",
  //           type: "sub",
  //         },
  //         {
  //           title: "ProductTags",
  //           path: "product/solid-hooded-sweatshirt",
  //           type: "link",
  //         },
  //         {
  //           title: "ProductInformation",
  //           path: "product/solid-cotton-tshirts",
  //           type: "link",
  //         },
  //         {
  //           title: "SocialShare",
  //           type: "link",
  //           path: "product/pointed-toe-kitten-heeled-sandals",
  //           labelx: "Hot",
  //           labelxClass: "warning-labelx",
  //         },
  //         {
  //           title: "RelatedProducts",
  //           type: "link",
  //           path: "product/delicious-biscuits",
  //           labelx: "Hot",
  //           labelxClass: "warning-labelx",
  //         },
  //         {
  //           title: "WishlistAndCompare",
  //           path: "product/crispy-potato-chips",
  //           type: "link",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: "MegaMenu",
  //   badge: "New",
  //   styleType: "link",
  //   customChildren: true,
  //   slider: "banner_landscape",
  //   children: [
  //     {
  //       column: [
  //         {
  //           title: "PopularCategories",
  //           type: "sub",
  //         },
  //         {
  //           title: "VegetablesFruits",
  //           type: "link",
  //           path: "collections",
  //           params: { category: "vegetables-fruits" },
  //         },
  //         {
  //           title: "BiscuitsSnacks",
  //           type: "link",
  //           labelx: "new",
  //           path: "collections",
  //           params: { category: "biscuits-snacks" },
  //         },
  //         {
  //           title: "DailyBreakfast",
  //           type: "link",
  //           labelx: "new",
  //           path: "collections",
  //           params: { category: "daily-breakfast" },
  //         },
  //         {
  //           title: "TrendyFashion",
  //           type: "link",
  //           path: "collections",
  //           params: { category: "fashion" },
  //         },
  //         {
  //           title: "FurnitureDecore",
  //           type: "link",
  //           path: "collections",
  //           params: { category: "furniture" },
  //         },
  //       ],
  //     },
  //     {
  //       column: [
  //         {
  //           title: "PopularTags",
  //           type: "sub",
  //         },
  //         {
  //           title: "BeautyProducts",
  //           type: "link",
  //           path: "collections",
  //           params: { tag: "beauty" },
  //         },
  //         {
  //           title: "ElectronicsAccessories",
  //           type: "link",
  //           labelx: "hot",
  //           labelxClass: "warning-labelx",
  //           path: "collections",
  //           params: { tag: "electronics" },
  //         },
  //         {
  //           title: "PetShop",
  //           type: "link",
  //           path: "collections",
  //           params: { tag: "pet-shop" },
  //         },
  //         {
  //           title: "MilkDairyProducts",
  //           type: "link",
  //           path: "collections",
  //           params: { tag: "milk-dairy-products" },
  //         },
  //         {
  //           title: "Sports",
  //           type: "link",
  //           path: "collections",
  //           params: { tag: "sports" },
  //         },
  //       ],
  //     },
  //     {
  //       column: [
  //         {
  //           title: "EmailTemplate",
  //           type: "sub",
  //         },
  //         {
  //           title: "WelcomeTemplate",
  //           type: "external_link",
  //           path: "https://themes.pixelstrap.com/fastkart/email-templete/welcome.html",
  //         },
  //         {
  //           title: "Abandonment",
  //           type: "external_link",
  //           labelx: "hot",
  //           labelxClass: "warning-labelx",
  //           path: "https://themes.pixelstrap.com/fastkart/email-templete/abandonment-email.html",
  //         },
  //         {
  //           title: "OfferTemplate",
  //           type: "external_link",
  //           path: "https://themes.pixelstrap.com/fastkart/email-templete/offer-template.html",
  //         },
  //         {
  //           title: "OrderSuccess",
  //           type: "external_link",
  //           labelx: "new",
  //           path: "https://themes.pixelstrap.com/fastkart/email-templete/order-success.html",
  //         },
  //         {
  //           title: "ResetPassword",
  //           type: "external_link",
  //           path: "https://themes.pixelstrap.com/fastkart/email-templete/reset-password.html",
  //         },
  //       ],
  //     },
  //     {
  //       column: [
  //         {
  //           title: "InvoiceTemplate",
  //           type: "sub",
  //         },
  //         {
  //           title: "InvoiceTemplate1",
  //           type: "external_link",
  //           path: "https://themes.pixelstrap.com/fastkart/invoice/invoice-1.html",
  //         },
  //         {
  //           title: "InvoiceTemplate2",
  //           type: "external_link",
  //           labelx: "hot",
  //           path: "https://themes.pixelstrap.com/fastkart/invoice/invoice-2.html",
  //         },
  //         {
  //           title: "InvoiceTemplate3",
  //           type: "external_link",
  //           path: "https://themes.pixelstrap.com/fastkart/invoice/invoice-3.html",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: "Pages",
  //   customChildren: false,
  //   children: [
  //     {
  //       title: "Authentication",
  //       type: "sub",
  //       children: [
  //         {
  //           title: "SignIn",
  //           path: "/auth/login",
  //           type: "link",
  //         },
  //         {
  //           title: "SignUp",
  //           path: "/auth/register",
  //           type: "link",
  //         },
  //         {
  //           title: "ForgotPassword",
  //           path: "/auth/forgot-password",
  //           type: "link",
  //         },
  //         {
  //           title: "VerifyOtp",
  //           path: "/auth/otp-verification",
  //           type: "link",
  //         },
  //         {
  //           title: "UpdatePassword",
  //           path: "/auth/update-password",
  //           type: "link",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Account",
  //       type: "sub",
  //       children: [
  //         {
  //           title: "MyDashboard",
  //           path: "/account/dashboard",
  //           type: "link",
  //         },
  //         {
  //           title: "MyNotifications",
  //           path: "/account/notification",
  //           type: "link",
  //         },
  //         {
  //           title: "MyAddresses",
  //           path: "/account/addresses",
  //           type: "link",
  //         },
  //         {
  //           title: "MyWallet",
  //           path: "/account/wallet",
  //           type: "link",
  //         },
  //         {
  //           title: "MyPoints",
  //           path: "/account/point",
  //           type: "link",
  //         },
  //         {
  //           title: "MyOrders",
  //           path: "/account/order",
  //           type: "link",
  //         },
  //         {
  //           title: "OrderDetails",
  //           path: "/account/order/details/1000",
  //           type: "link",
  //         },
  //         {
  //           title: "RefundHistory",
  //           path: "/account/refund",
  //           type: "link",
  //         },
  //         {
  //           title: "PayoutDetails",
  //           path: "/account/bank-details",
  //           type: "link",
  //         },
  //       ],
  //     },
  //     {
  //       title: "AboutUs",
  //       type: "link",
  //       path: "/about-us",
  //     },
  //     {
  //       title: "BrowseFaqs",
  //       type: "link",
  //       path: "/faq",
  //       labelx: "hot",
  //       labelxClass: "warning-labelx",
  //     },
  //     {
  //       title: "Cart",
  //       type: "link",
  //       path: "/cart",
  //     },
  //     {
  //       title: "Checkout",
  //       type: "link",
  //       path: "/checkout",
  //     },
  //     {
  //       title: "Compare",
  //       type: "link",
  //       path: "/compare",
  //     },
  //     {
  //       title: "ContactUs",
  //       path: "/contact-us",
  //       type: "link",
  //     },
  //     {
  //       title: "Maintenance",
  //       type: "link",
  //       path: "/maintenance",
  //     },
  //     {
  //       title: "Offers",
  //       type: "link",
  //       path: "/offers",
  //       labelx: "new",
  //     },
  //     {
  //       title: "Search",
  //       type: "link",
  //       path: "/search",
  //       labelx: "hot",
  //       labelxClass: "warning-labelx",
  //     },
  //     {
  //       title: "Wishlist",
  //       type: "link",
  //       path: "/wishlist",
  //     },
  //     {
  //       title: "404",
  //       type: "link",
  //       path: "/404",
  //     },
  //   ],
  // },
  // {
  //   id: 7,
  //   title: "Seller",
  //   children: [
  //     {
  //       title: "BecomeSeller",
  //       path: "/seller/become-seller",
  //     },
  //     {
  //       title: "SellerStoresBasic",
  //       path: "/seller/stores",
  //       params: { layout: "basic_store" },
  //     },
  //     {
  //       title: "SellerStoresClassic",
  //       path: "/seller/stores",
  //       params: { layout: "classic_store" },
  //     },
  //     {
  //       title: "SellerDetailsBasic",
  //       path: "/seller/stores/fruits-market",
  //       params: { layout: "basic_store_details" },
  //     },
  //     {
  //       title: "SellerDetailsClassic",
  //       path: "/seller/stores/fruits-market",
  //       params: { layout: "classic_store_details" },
  //     },
  //   ],
  // },
];
