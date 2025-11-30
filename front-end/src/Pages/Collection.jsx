import React from 'react'

const Collection = () => {
<<<<<<< HEAD
  return (
    <div>
      
=======

  const {products = [], ShowFilter, setShowFilter, search, showSearch} = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  // category array
  const toggleCategory = (e) => {
    if (categories.includes(e.target.value)) {
      setCategories(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategories(prev=> [...prev,e.target.value]);
    }
  }

  // subCategory array
  const toggleSubCategory = (e) => {
    if (subCategories.includes(e.target.value)) {
      setSubCategories(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategories(prev=> [...prev,e.target.value]);
    }
  }

  // apply filters + sort
  const applyFilters = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (categories.length > 0) {
      productsCopy = productsCopy.filter(item => categories.includes(item.category));
    }

    if (subCategories.length > 0) {
      productsCopy = productsCopy.filter(item => subCategories.includes(item.subCategory));
    }

    if (sortType === 'low-high') {
      productsCopy.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high-low') {
      productsCopy.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(productsCopy);
  }

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  // run whenever filters, products, or sort change
  useEffect(() => {
    applyFilters();
  }, [categories, subCategories, products, sortType, search, showSearch, products]);


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 '>
      {/* filter products  */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!ShowFilter)}  className='my-2 text-2xl flex items-center cursor-pointer gap-2'>FilTERS
          <img src={assets.dropdown_icon} alt='' className={`h-3 sm:hidden ${ShowFilter ? "rotate-90" : ""}`}/>
        </p>

        {/* Category filter here */}
        <div className={`border border-gray-800 pl-5 py-3 mt-6 ${ShowFilter ? "" : "hidden"} sm:block` }>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory}/> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory}/> Kids
            </p>
          </div>
        </div>

        {/* sub Category filter here */}
        <div className={`border border-gray-800 pl-5 py-3 my-5 ${ShowFilter ? "" : "hidden"} sm:block` }>
          <p className='mb-3 text-sm font-medium'>Types</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} /> Winterwear
            </p>
          </div>
        </div>

      </div>

      {/* right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'All'} text2={'Collection'}/>

          {/* product sort */}
          <select value={sortType} onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-800 text-sm px-2'>
            <option value='relevant'> Sort by: Relevant</option>
            <option value='low-high'> Sort by: Low to High</option>
            <option value='high-low'> Sort by: High to Low</option>
          </select>
        </div>

        {/* map products here */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))
          }
        </div>
      </div>
>>>>>>> dev
    </div>
  )
}

export default Collection
