const articles = [
  { 
    id: 1,
    title: 'Build PC Budget Terbaik', 
    image: 'https://plus.unsplash.com/premium_photo-1682141878168-5dace8e1785d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    category: 'PC Build',
    description: 'Panduan lengkap untuk membangun PC terbaik dengan budget terbatas.',
    isBookmarked: true,
  },
  { 
    id: 2,
    title: 'Keyboard Gaming Terbaik', 
    image: 'https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    category: 'Gaming',
    description: 'Rekomendasi keyboard gaming terbaik dengan fitur unggulan untuk pengalaman bermain optimal.',
    isBookmarked: false,
  },
  { 
    id: 3,
    title: 'Laptop Kerja Terbaik', 
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    category: 'Laptop',
    description: 'Daftar laptop terbaik untuk menunjang produktivitas kerja Anda.',
    isBookmarked: true,
  },
  { 
    id: 4,
    title: 'AI pada Graphic Processing Unit', 
    image: 'https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    category: 'AI',
    description: 'Bagaimana kecerdasan buatan mengubah dunia GPU dan komputasi grafis.',
    isBookmarked: false,
  },
];

const categories = ["Semua", "PC Build", "Gaming", "Laptop", "AI"];

export { articles, categories };
