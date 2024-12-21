const menu = [
    {
      id: 1,
      title: "Sambar Idli",
      category: "Breakfast",
      price: 29.99,
      img: "./images/img_1.jpg",
      desc: `Sambar Idli is a South Indian breakfast meal where soft fluffy steamed cakes known as idli are served with sambar, a vegetable lentil stew.  `,
    },
    {
      id: 2,
      title: "Meal",
      category: "Lunch",
      price: 119.99,
      img: "./images/img_09.jpg",
      desc: `Rice is a staple food eaten with different variety items of sambar, curries, pickles, curds, chutneys, sweets, pickles, rasams, papads, etc., `,
    },
    {
      id: 3,
      title: "Milk Shake",
      category: "Beverages",
      price: 19.99,
      img: "./images/img_18.jpg",
      desc: ` A Milkshake is a sweet beverage made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup.`,
    },
    {
      id: 4,
      title: "Puri",
      category: "Breakfast",
      price: 39.99,
      img: "./images/img_04.webp",
      desc: ` Puri is an Indian fried bread made with just 3 ingredients – wheat flour, salt and water. Small portions of unleavened dough is rolled to small discs and deep fried in hot oil. `,
    },
    {
      id: 5,
      title: "Pulihora",
      category: "Lunch",
      price: 59.99,
      img: "./images/img_10.jpg",
      desc: `The pulihora is prepared with kokum, tamarind, lemon or green mango as main souring ingredient, along with a blend of spices, lentils, peanuts and jaggery cooked in oil and mixed with cooked rice along with fried curry leaves and turmeric. `,
    },
    {
      id: 6,
      title: "Tea",
      category: "Beverages",
      price: 14.99,
      img: "./images/img_15.jpg",
      desc: `Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to East Asia`,
    },
    {
      id: 7,
      title: "Upma",
      category: "Breakfast",
      price: 24.99,
      img: "./images/img_07.jpg",
      desc: `Upma is a popular South Indian breakfast made with cream of wheat or semolina flour (called rava or suji locally), veggies, spices and herbs `,
    },
    {
      id: 8,
      title: "Curd Rice",
      category: "Lunch",
      price: 59.99,
      img: "./images/img_12.jpg",
      desc: `Curd rice originated as a dish of South India but it is eaten widely in North India during the summer. It keeps the body cool, prevents intestinal syndrome, provides energy to the body, helps in digestion.`,
    },
    {
      id: 9,
      title: "Mock Tail",
      category: "Beverages",
      price: 29.99,
      img: "./images/img_20.jpg",
      desc: `Mocktails are usually iced drink made with any of various ingredients (such as juice, herbs, and soda water) but without alcohol.`,
    },
    {
      id: 10,
      title: "Pesarattu",
      category: "Dinner",
      price: 49.99,
      img: "./images/img_22.jpg",
      desc: `Pesarattu are moong bean crepes made with whole moong lentils, ginger, cumin and salt. This crisp crepes make for a great gluten-free & protein packed.`,
    },
    {
        id: 11,
        title: "Vada",
        category: "Breakfast",
        price: 34.99,
        img: "./images/img_03.jpg",
        desc: `Vada is a balanced food that provides a mix of carbohydrates, protein, fiber, and essential vitamins and minerals..`,
   
    },
    {
        id: 12,
        title: "Chicken Biryani",
        category: "Biryani",
        price: 149.99,
        img: "./images/img_39.jpg",
        desc: `A traditional biryani consists of fluffy basmati rice layered over tender & succulent pieces of meat, accompanied with the mesmerizing aromas of spices, herbs & caramelized onions.`,
   
    },
    {
        id: 13,
        title: "Prawns Biryani",
        category: "Biryani",
        price: 199.99,
        img: "./images/img_40.jpg",
        desc: `Prawn biryani is a flavorful dish of prawns, rice, herbs, and spices that originated in South Asia.`,
   
    },
    {
        id: 14,
        title: "Mutton Biryani",
        category: "Biryani",
        price: 249.99,
        img: "./images/img_41.jpg",
        desc: `Mutton biryani is a traditional South Asian dish where marinated pieces of mutton (lamb) are layered with fragrant basmati rice, spices, and herbs, then cooked in a sealed pot ("dum" style) to create a flavorful, aromatic one-pot meal.`,
   
    },
    {
        id: 15,
        title: "Veg Biryani",
        category: "Biryani",
        price: 169.99,
        img: "./images/img_42.jpg",
        desc: `Veg biryani is a flavorful, aromatic rice dish made with basmati rice, mixed vegetables, and spices. It's a popular dish in South Asia that can be made vegetarian by substituting meat with vegetables or paneer.`,
   
    },
    {
        id: 16,
        title: "Mixture",
        category: "Snackes",
        price: 39.99,
        img: "./images/img_29.jpg",
        desc: `Mixture snacks are a type of snack food that is popular in India and is made by combining a variety of ingredients such as nuts, seeds, dried fruit, and spices.`,
   
    },
    {
        id: 17,
        title: "Karam Jeedipappu",
        category: "Snackes",
        price: 99.99,
        img: "./images/img_32.jpg",
        desc: `Karam Jeedipappu is a spicy cashew snack made with cashews, red chili powder, pepper powder, and ghee.`,
   
    },
    {
        id: 18,
        title: "Mirapakay Bajji",
        category: "Snackes",
        price: 34.99,
        img: "./images/img_33.jpg",
        desc: `Mirapakai Bajji is a popular South Indian street fried snack made with gram flour, spices and green chilies. Mirchi translates to chilies and Bajji to gram flour fritters`,
   
    },
    {
        id: 19,
        title: "Pani Puri",
        category: "Snackes",
        price: 59.99,
        img: "./images/img_36.jpg",
        desc: `Pani puri is an immensely popular Indian street food of crispy, hollow, fried dough balls (puri) stuffed with boiled potatoes or steamed`,
   
    },
    {
        id: 20,
        title: "Masala Vada",
        category: "Snackes",
        price: 39.99,
        img: "./images/img_35.jpg",
        desc: `Masala vada also known as Chana dal vada or paruppu vadai is a popular South Indian tea time snack made with chana dal, spices, onions & herbs.`,
   
    }
  ];
  
  
  const sectionCenter = document.querySelector('.section-center');
  const container = document.querySelector('.btn-container');
  
  
  //load items
  window.addEventListener('DOMContentLoaded',function(){
    displayMenuItems(menu)
    displayMenuButtons();
  });
  
  
  function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
      return `<article class="menu-item">
      <img src=${item.img} class="photo" alt=${item.title}>
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">
          ${item.desc}
        </p>
      </div>
    </article>`
    });
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
  }
  
  function displayMenuButtons(){
    const categories = menu.reduce(function(values,item){
      if(!values.includes(item.category))
      {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
    );
  
    const categoryBtns = categories.map(function(category) {
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
    }).join("");
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll('.filter-btn');
  
    //filter items
  filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function(menuItem){
        if(menuItem.category === category)
        {
          return menuItem;
        }
      });
      if(category === 'all')
      {
        displayMenuItems(menu);
      }
      else
      {
        displayMenuItems(menuCategory);
      }
    });
  });
  }