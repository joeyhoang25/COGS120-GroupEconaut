//get Home page

var cars = require('../cars.json');

exports.view = function(req, res){
    res.render("Productpage", {
      "BMW": {
              "brand":"BMW",
              "model":"330i",
              "year":"2021",
              "description":"The 2021 BMW 3-series epitomizes the modern sports sedan with its comprehensive performance and innate sophistication. The German brand offers two phenomenal engines for this model—a 255-hp four-cylinder and a 385-hp straight-six—both of which are as quick as they are refined. There's also a plug-in hybrid for the green crowd. While we're saddened by BMW's decision to eliminate the manual transmission, the perceptive eight-speed automatic is a worthy substitute. What's more, the 3's fantastic chassis can seamlessly shift from calm to frisky at a moment's notice. Unfortunately, its steering—although improved over the previous generation's—still lacks the tactility that enthusiasts once idolized. The 2021 3-series fulfills its mission as an entry-level premium sedan with ample cabin and trunk space as well as copious amounts of luxury and technology.",
              "MPG":"26 City, 36 Hwy",
              "emission":"3.95",
              "fuelcap":"15.6",
              "score":"43",
              "image":"330i.png"
          },

      "Toyota":[
          {
              "brand":"Toyota",
              "model":"Prius",
              "year":"2021",
              "description":"The Prius offers the best of both worlds: impressive fuel economy and the flexibility of electric charging",
              "MPG":"58 City, 53 Hwy",
              "emission":"2.37",
              "fuelcap":"10.6 to 11.3",
              "score":"68",
              "image":"2021.toyota.prius.png"
          }
        /*
          {
              "brand":"Toyota",
              "model":"Camry",
              "year":"2021",
              "description":"The powerful, stylish 2021 Camry Hybrid gives up nothing with its optimized fuel economy, advanced tech and stirring drive. We have expanded our hybrid battery warranty to reflect our confidence in the quality, dependability and reliability of our products.",
              "MPG":"28 City, 39 Hwy",
              "emission":"3.49",
              "fuelcap":"14.4 to 15.8 ",
              "score":"",
              "image":"toyota-camry.png"
          },
          {
              "brand":"Toyota",
              "model":"4Runner",
              "year":"2016",
              "description":"For over 35 years, 4Runner has delivered a ride that's smooth in the city — but its true home is the off-road. Its proven body-on-frame construction, advanced off-road technologies and tough powertrain keep this off-road icon at the front of the pack. ",
              "MPG":"17 City, 22 Hwy",
              "emission":"5.94",
              "fuelcap":"23.0",
              "score":"",
              "image":"toyota-4runner.png"
          },
          {
              "brand":"Toyota",
              "model":"Highlander",
              "year":"2021",
              "description":"More miles mean more fun. Whether you're driving around town or venturing out to see what nature has to offer, Highlander Hybrid has up to an EPA-estimated 36 mpg combined ",
              "MPG":"21 City, 29 Hwy",
              "emission":"5.15",
              "fuelcap":"17.9",
              "score":"",
              "image":"toyota-highlander.png"
          },
          {
              "brand":"Toyota",
              "model":"Corolla",
              "year":"2021",
              "description":"Awarded Green Car Journal's 2020 Green Car of the Year®, Corolla Hybrid even comes with an enhanced Hybrid Battery Warranty that lasts for 10 years from date of first use, or 150,000 miles, whichever comes first.",
              "MPG":"31 City, 40 Hwy",
              "emission":"5.59",
              "fuelcap":"13.2",
              "score":"",
              "image":"corolla.png"
          },
          {
              "brand":"Toyota",
              "model":"Tacoma",
              "year":"2021",
              "description":"The 2021 Toyota Tacoma is outfitted with specially engineered parts and accessories so you can take on the world’s gnarliest terrain. It’s time to get out there and tackle your next big adventure. ",
              "MPG":"20 City, 23 Hwy",
              "emission":"6.59",
              "fuelcap":"21.1",
              "score":"",
              "image":"tacoma.png"
          },
          {
              "brand":"Toyota",
              "model":"RAV4",
              "year":"2021",
              "description":"Enjoy a smooth ride that delivers driving confidence. RAV4's multi-link rear suspension helps enhance handling and control by working with its natural body rigidity in order to keep traction steady.",
              "MPG":"28 City, 35 Hwy",
              "emission":"4.09",
              "fuelcap":"14.5",
              "score":"",
              "image":"ra4.png"
          } */
      ],

      "Honda":[
          {
              "brand":"Honda",
              "model":"Civic",
              "year":"2021",
              "description":"The 2021 Civic Sedan features aggressive lines and refined features that make it stand out from the crowd. Signature C-shaped taillights, a sleek profile and a bold Sport trim add to its fierce personality.",
              "MPG":"32 City, 42 Hwy",
              "emission":"3.39",
              "fuelcap":"12.4",
              "score":"",
              "image":"2021-civic.png"
          }
        /*  {
              "brand":"Honda",
              "model":"Accord",
              "year":"2021",
              "description":"With a robust hybrid powertrain, power-flow monitor and EV mode, the 2021 Accord Hybrid offers everything that’s great about the Accord with the added benefit of increased fuel efficiency.",
              "MPG":"30 City, 38 Hwy",
              "emission":"3.59",
              "fuelcap":"14.8",
              "score":"",
              "image":"accord.png"
          },
          {
              "brand":"Honda",
              "model":"CRV",
              "year":"2021",
              "description":"The CR-V continues to set the standard for SUV design. Its sporty exterior boasts sculpted lines and available 19-inch alloy wheels, while its spacious interior offers an available heated steering wheel, leather-trimmed seats and other premium materials.",
              "MPG":"28 City, 34 Hwy",
              "emission":"3.95",
              "fuelcap":"14.0",
              "score":"",
              "image":"crv.png"
          } */
      ],

      "Jeep":[
          {
              "brand":"Jeep",
              "model":"Wrangler",
              "year":"2021",
              "description":"The 2021 Jeep® Wrangler is a getaway of its own, with an adventure-inspired cabin featuring elevated craftsmanship and comfort-laden conveniences like the available Trail Rail™ system and the Jeep Utility Grid for cargo storage.",
              "MPG":"22 City, 29 Hwy",
              "emission":"5.65",
              "fuelcap":"21.5",
              "score":"",
              "image":"wrangler.png"
          }
        /*  {
              "brand":"Jeep",
              "model":"Cherokee",
              "year":"2021",
              "description":"Stay confident on the road, in nearly any weather. The 2021 Jeep® Cherokee is driven by impressive available on-road and off-road capability.",
              "MPG":"19 City, 26 Hwy",
              "emission":"4.56",
              "fuelcap":"24.6",
              "score":"",
              "image":"grand-cherokee.png"
          } */
      ],

      "Tesla":
          {
              "brand":"Tesla",
              "model":"Model S",
              "year":"2021",
              "description":"Long Range and Plaid platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.",
              "MPGe":"121 City, 112 Hwy",
              "Range":"387 to 520 mi battery-only",
              "emission":"1.07",
              "score":"",
              "image":"2019.tesla.model.s.png"
          },

      "Ford":[
          {
              "brand":"Ford",
              "model":"Transit Connect",
              "year":"2020",
              "description":"Engineered to withstand the severity of everyday on-the-job duty. Configure a Transit Connect Cargo Van with a vocational upfit that precisely matches your business.",
              "MPG":"24 City, 29 Hwy",
              "emission":"5.39",
              "fuelcap":"15.8",
              "score":"",
              "image":"transit.png"
          } /*
          {
              "brand":"Ford",
              "model":"Escape",
              "year":"2021",
              "description":"Ford's new off-road capable Bronco signals the brand's fresh focus on off-the-grid adventure, but its bread-and-butter Escape crossover still caters to the on-road, family-car crowd.",
              "MPG":"44 City, 37 Hwy",
              "emission":"3.95",
              "fuelcap":"15.7",
              "score":"",
              "image":"escape.png"
          },
          {
              "brand":"Ford",
              "model":"Explorer",
              "year":"2021",
              "description":"The 2021 Ford Explorer is primed for modern-day exploration. Its adjustable interior offers space and comfort for the whole family. And it helps you make the most of every experience with connected technology and an athletic build that’s ready for whatever lies ahead.",
              "MPG":"27 City, 28 Hwy",
              "emission":"4.94",
              "fuelcap":"18.6",
              "score":"",
              "image":"explorer.png"
          },
          {
              "brand":"Ford",
              "model":"F-Series",
              "year":"2021",
              "description":"The all-new F-150 is purpose-built from the ground up — redesigned to be the toughest, most productive F-150 ever. This is what happens when you merge premium-grade muscle with finely tuned intelligence and design. ",
              "MPG":"25 City, 26 Hwy",
              "emission":"5.39",
              "fuelcap":"30.6",
              "score":"",
              "image":"f-series.png"
          } */
      ],
      "Nissan":[
          {
              "brand":"Nissan",
              "model":"Altima",
              "year":"2021",
              "description":"Altima is our latest technology, built to unlock the joy of driving. With driver assistance and available Intelligent All-Wheel Drive, Altima responds to the world around you.",
              "MPG":"28 City, 39 Hwy",
              "emission":"3.70",
              "fuelcap":"16.2",
              "score":"",
              "image":"altima.png"
          } /*
          {
              "brand":"Nissan",
              "model":"Rogue",
              "year":"2021",
              "description":"With the ability to get up and go at a moment’s notice, the drive to explore new ideas never ends. So while others may contemplate the next adventure, you’re halfway there with a smile on your face. Win life – go Rogue.",
              "MPG":"27 City, 35 Hwy",
              "emission":"4.09",
              "fuelcap":"14.5",
              "score":"",
              "image":"rogue.png"
          } */
      ],
      "Mazda":[
          {
              "brand":"Mazda",
              "model":"CX-5",
              "year":"2021",
              "description":"The Mazda CX-5 offers an available 2.5 Turbo engine that delivers up to 250 hp and 320 lb-ft of torque. Paired with i-Activ AWD®, this dynamic CUV offers impressive power and handling you can feel from the moment you step on the accelerator.",
              "MPG":"25 City, 31 Hwy",
              "emission":"4.23",
              "fuelcap":"15.3",
              "score":"",
              "image":"cx5.png"
          }
      ],
      "Subaru":[
          {
              "brand":"Subaru",
              "model":"Outback",
              "year":"2021",
              "description":"The 2021 Subaru Outback offers unmatched technology and safety. It's an SUV built to take you on adventures in style and comfort. Go where the love takes you.",
              "MPG":"26 City, 33 Hwy",
              "emission":"4.56",
              "fuelcap":"18.5",
              "score":"",
              "image":"outback.png"
          } /*
          {
              "brand":"Subaru",
              "model":"Forester",
              "year":"2021",
              "description":"The Subaru Forester is a versatile SUV with advanced technology & safety, a roomy interior and all-weather capability.",
              "MPG":"26 City, 33 Hwy",
              "emission":"",
              "fuelcap":"16.6",
              "score":"4.09",
              "image":"forester.png"
          } */
      ],
      "GMC":[
          {
              "brand":"GMC",
              "model":"Sierra",
              "year":"2021",
              "description":"GMC has always made top-level engineering the rule, and the latest-generation Sierra is no exception.",
              "MPG":"23 City, 30 Hwy",
              "emission":"4.56",
              "fuelcap":"28",
              "score":"",
              "image":"sierra.png"
          }
      ],
      "Chevrolet":[
          {
              "brand":"Chevrolet",
              "model":"Equinox",
              "year":"2021",
              "description":"The 2021 Equinox is more than just a way to get around. It’s a chance to get away. With technology to help you keep in touch, standard Chevy Safety Assist features that help you stay safe, and capability for a fun drive, you have everything you need to break free.",
              "MPG":"26 City, 31 Hwy",
              "emission":"4.23",
              "fuelcap":"15.6",
              "score":"",
              "image":"equinox.png"
          } /*
          {
              "brand":"Chevrolet",
              "model":"Silverado",
              "year":"2021",
              "description":"Hardworking. Smart. Bigger, yet lighter than the previous generation. A diesel engine that helps give it available best-in-class highway fuel economy. Silverado is built to get the job done right – every time.",
              "MPG":"23 City, 33 Hwy",
              "emission":"4.39",
              "fuelcap":"28",
              "score":"",
              "image":"silverado.png"
          } */
      ]
  });
  };


  exports.viewCar = function(req, res) {
    var model = req.params.model;
    // var testBrand = req.params.name;
    // var year = req.params.year;
    console.log("The selected Car: " + model  );
     res.render("Productpage", {
         "cars": cars,
         "productName": model,
         //"fuelcap": "test successful",
         // "testBrand": testBrand,
         // "year": year,

     });
  }
