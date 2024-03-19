const blogData = [
  {
    title: 'Sample Blog Post 1',
    date: 'March 15, 2024',
    slug: 'sample-blog-post-1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero vitae leo efficitur mattis. Nullam consectetur, magna et venenatis placerat, nisi elit gravida libero, id tempor est sapien ac dui.'
  },
  {
    title: 'Sample Blog Post 2',
    date: 'March 16, 2024',
    slug: 'sample-blog-post-2',
    content: 'Duis euismod metus sit amet orci auctor, eget euismod orci tristique. Mauris id commodo ligula. Quisque vitae justo mi. Nulla facilisi. Ut vehicula quam ut ligula congue tempor.'
  },
  {
    title: 'Sample Blog Post 3',
    date: 'March 17, 2024',
    slug: 'sample-blog-post-3',
    content: 'Suspendisse eget odio id libero tincidunt consectetur. Sed id mauris a libero vehicula dictum. Nulla facilisi. Duis non mauris eget sapien eleifend ullamcorper.'
  },
  {
    title: 'Sample Blog Post 4',
    date: 'March 18, 2024',
    slug: 'sample-blog-post-4',
    content: 'Fusce auctor vitae nisi vel ultricies. Nunc ac dolor consectetur, fermentum magna in, ultricies nulla. Maecenas suscipit, tortor id ultricies fermentum, lectus dui venenatis arcu, sit amet tempor purus mi sed dui.'
  },
  {
    title: 'Sample Blog Post 5',
    date: 'March 19, 2024',
    slug: 'sample-blog-post-5',
    content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam ac lacinia justo, sit amet vestibulum orci. Aliquam erat volutpat.'
  },
  {
    title: 'Sample Blog Post 6',
    date: 'March 20, 2024',
    slug: 'sample-blog-post-6',
    content: 'Curabitur posuere urna sit amet efficitur posuere. Cras quis ipsum nec ante sollicitudin viverra nec a metus. Nunc nec arcu varius, sodales felis sit amet, vehicula elit.'
  },
  {
    title: 'Sample Blog Post 7',
    date: 'March 21, 2024',
    slug: 'sample-blog-post-7',
    content: 'Vivamus tristique sapien sit amet risus posuere, eget blandit est cursus. Nam in enim nec lacus mollis pharetra nec vel magna. Sed faucibus, mauris nec faucibus laoreet, eros leo congue tortor, et dictum magna enim a felis.'
  },
  {
    title: 'Sample Blog Post 8',
    date: 'March 22, 2024',
    slug: 'sample-blog-post-8',
    content: 'Integer et erat auctor, ultrices metus sed, faucibus sapien. Ut at ipsum efficitur, convallis nisi a, commodo ipsum. Proin ac rhoncus ipsum, vel dapibus felis. Morbi sit amet justo vitae sapien elementum vestibulum.'
  },
  {
    title: 'Sample Blog Post 9',
    date: 'March 23, 2024',
    slug: 'sample-blog-post-9',
    content: 'Etiam eget mi a felis convallis aliquam non sit amet lorem. Vestibulum id nisi id augue luctus laoreet. Nulla facilisi. Donec malesuada nec libero a auctor. Cras efficitur, dolor nec hendrerit malesuada, mi felis placerat urna, et ullamcorper magna turpis nec odio.'
  },
  {
    title: 'Sample Blog Post 10',
    date: 'March 24, 2024',
    slug: 'sample-blog-post-10',
    content: 'Fusce et tortor sed sapien iaculis vehicula. Nam et bibendum magna. Nullam nec magna sed tortor blandit pharetra. Nullam vel mi ut purus posuere ultrices.'
  },
  {
    title: 'Sample Blog Post 11',
    date: 'March 25, 2024',
    slug: 'sample-blog-post-11',
    content: 'Phasellus euismod pharetra felis, id sollicitudin odio consequat in. Sed rutrum velit nec tortor consequat, sit amet aliquam mi congue. In hac habitasse platea dictumst.'
  },
  {
    title: 'Sample Blog Post 12',
    date: 'March 26, 2024',
    slug: 'sample-blog-post-12',
    content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer id tempor libero. Donec id elit vel ex interdum congue.'
  },
  {
    title: 'Sample Blog Post 13',
    date: 'March 27, 2024',
    slug: 'sample-blog-post-13',
    content: 'Proin eu neque et purus fermentum vulputate. Mauris mattis diam ut ligula scelerisque, eu sodales dui condimentum. Ut finibus dolor eu tincidunt semper.'
  },
  {
    title: 'Sample Blog Post 14',
    date: 'March 28, 2024',
    slug: 'sample-blog-post-14',
    content: 'Vestibulum pretium, leo at convallis laoreet, lacus leo fermentum odio, eu rutrum justo ante at lacus. Cras dapibus tortor eu arcu consectetur tincidunt. Nullam fermentum, libero auctor ultricies semper, arcu odio lobortis sem, nec eleifend purus enim nec enim.'
  },
  {
    title: 'Sample Blog Post 15',
    date: 'March 29, 2024',
    slug: 'sample-blog-post-15',
    content: 'Fusce ut lacinia metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut aliquam nunc at risus accumsan, eu condimentum est scelerisque.'
  },
  {
    title: 'Sample Blog Post 16',
    date: 'March 30, 2024',
    slug: 'sample-blog-post-16',
    content: 'Aliquam eget libero in nunc convallis fermentum sit amet eget purus. Fusce aliquam massa sed lorem condimentum, ac tempor libero condimentum. Duis maximus nisi ac arcu laoreet, sed pellentesque felis sollicitudin.'
  },
  {
    title: 'Sample Blog Post 17',
    date: 'March 31, 2024',
    slug: 'sample-blog-post-17',
    content: 'Praesent quis efficitur nibh. Suspendisse non interdum nisi. Nulla at risus mauris. Morbi ultrices consequat neque, sit amet ultrices odio accumsan vel. Suspendisse potenti.'
  },
  {
    title: 'Sample Blog Post 18',
    date: 'April 1, 2024',
    slug: 'sample-blog-post-18',
    content: 'Nam non dapibus lectus. Duis euismod condimentum nisl, et dapibus eros rutrum eu. Sed vestibulum, arcu nec varius ultrices, augue velit consectetur magna, vel dictum tellus orci id ante.'
  },
  {
    title: 'Sample Blog Post 19',
    date: 'April 2, 2024',
    slug: 'sample-blog-post-19',
    content: 'Suspendisse consequat nisl ac nisi dignissim eleifend. Nulla facilisi. Nulla id nunc eu libero condimentum volutpat. Integer ut nibh ut mi venenatis egestas non a leo.'
  },
  {
    title: 'Sample Blog Post 20',
    date: 'April 3, 2024',
    slug: 'sample-blog-post-20',
    content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce rhoncus, risus et accumsan vestibulum, elit enim accumsan velit, ut tempor sem enim nec eros.'
  },
];

export default blogData;
