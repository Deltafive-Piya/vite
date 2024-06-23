**April-June 2024 --**

# <span style= "color:white;">[Okinawa App](https://deltafive-piya.github.io/vite/) ([repo](https://github.com/Deltafive-Piya/Okinawa/tree/main/okiapp))</span>

## <span style= "color:gold;">Specification</span>

[(Vite-built)](https://tailwindcss.com/docs/guides/vite) [TailwindCSS](https://tailwindcomponents.com/cheatsheet/) project:

```shell
npm run dev
```

## <span style= "color:gold;">Development</span>

- <span style= "color:white;">Carousels</span>

  - Flowbite React ([Carousel Component](https://flowbite-react.com/docs/components/carousel))
    [<span style= "color:purple;">visual help</span>](https://youtu.be/gaH_LHo4e3w?t=2440) - @ project root
    `shell
	npm i flowbite-react
	`

- <span style= "color:white;">Accordions</span>
  - Flowbite React
    ```jsx
    import { Accordion } from "flowbite-react";
    ```
- <span style= "color:white;">Alert</span>
  - Flowbite React
    ```jsx
    import { Alert } from "flowbite-react";
    ```
- <span style= "color:white;">Popup</span>
  - Flowbite React
    ```jsx
    import { Modal } from "flowbite-react";
    ```
- <span style= "color:white;">Navbar- React</span>
  - React Icons ([repos: **FA** and **GI**](https://react-icons.github.io/react-icons/icons/fa6/))
    - @ project root
    ```shell
    npm i react-icons
    ```
- <span style= "color:white;">Footer</span>
- <span style= "color:white;">Header</span>
  - Left/Right Sidebar switchers
- <span style= "color:white;">Fonts</span>

  - [Google Fonts](https://fonts.google.com/selection/embed)

    1. apply @importURL PREPENDING @index.css

    ```css
    @import url("https://fonts.googleapis.com/
    		            css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap");
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

    2. configure tailwind @ tailwind.config.js

    ```js

    		theme: {
    			extend: {
    				fontFamily:{
    					akuya:["Tajawal:wght@200", "sans-serif"]
    ```

    3.  apply font @App.jsx:

    ```js
    <p className="text-2xl font-akuya my-10">
    	Okinawan Food; food of color and superfoods.
    </p>
    ```

- <span style= "color:white;">Setting (tailwind)css defaults to html tags</span>
  ```css
  typography: {
  	DEFAULT: {
  		css: {
  			h1: {
  				fontSize: "2.25rem",
  				fontWeight: "bold",
  				fontFamily: "inherit",
  				// Add subpixel-antialiased to h1
  				"-webkit-font-smoothing": "subpixel-antialiased",
  				"-moz-osx-font-smoothing": "auto",
  			},
  			h2: {
  				// Similar styles for h2
  				// Add subpixel-antialiased to h2
  				"-webkit-font-smoothing": "subpixel-antialiased",
  				"-moz-osx-font-smoothing": "auto",
  			},
  			// Repeat for h3, h4, h5, h6 with respective styles
  			h3: {
  				// Add subpixel-antialiased to h3
  				"-webkit-font-smoothing": "subpixel-antialiased",
  				"-moz-osx-font-smoothing": "auto",
  			},
  			h4: {
  				// Add subpixel-antialiased to h4
  				"-webkit-font-smoothing": "subpixel-antialiased",
  				"-moz-osx-font-smoothing": "auto",
  			},
  			h5: {
  				// Add subpixel-antialiased to h5
  				"-webkit-font-smoothing": "subpixel-antialiased",
  				"-moz-osx-font-smoothing": "auto",
  			},
  			h6: {
  				// Add subpixel-antialiased to h6
  				"-webkit-font-smoothing": "subpixel-antialiased",
  				"-moz-osx-font-smoothing": "auto",
  			},
  		},
  	},
  ```
- <span style= "color:white;">SideBar Navigation</span>
  - SideBar.jsx
    - Create scroll action:
    ```jsx
    const SideBar = () => {
        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    ```
    ```jsx
    const scrollToSection_1 = () => {
    	const Section_1 = document.getElementById("section-1");
    	if (Section_1) {
    		Section_1.scrollIntoView({ behavior: "smooth" });
    	}
    };
    ```
    - Assign the action to the Icon:
    ```jsx
    <SideBarIcon icon={<GiJapan size="28" />} onClick={scrollToTop} />
    ```
    - Remodel the SideBar for Onclick:
    ```jsx
    const SideBarIcon = ({ icon, onClick }) => (
    	<div className="sidebar-icon group" onClick={onClick}>
    		{icon}
    	</div>
    );
    ```
- <span style= "color:white;">SideBar Taxi Modal</span>

  - Create State and Logic to toggle the TaxiModal @SideBar.jsx:

    ```jsx
    import { useState } from "react";

    const [showTaxiPopup, setShowTaxiPopup] = useState(false);

    const toggleTaxiPopup = () => {
    	setShowTaxiPopup(!showTaxiPopup);
    };
    ```

  - import the new modal @SideBar.jsx:
    ```jsx
    import { TaxiModal } from "./modals/TaxiModal";
    ```
  - Pass function as a Prop to TaxiModal @App.jsx:
    ```jsx
    <SideBarIcon
    	icon={<FaTaxi size="28" className="text-yellow-500" />}
    	onClick={toggleTaxiModal}
    />
    ```

## <span style= "color:gold;">Deployment</span>

- install plugin:
  ```shell
  npm install vite-plugin-gh-pages --save-dev
  ```
- configure vite for deployment @vite.config.js:
  ```jsx
  import { defineConfig } from "vite";
  import { VitePluginGhPages } from "vite-plugin-gh-pages";

  export default defineConfig({
  	plugins: [VitePluginGhPages()],
  });
  ```
- [setup GitHub WorkFlow](https://github.com/Deltafive-Piya/Okinawa/settings/actions/runners/new)

## <span style= "color:gold;">Obstacles</span>

- Node 16 was depricated; could not deploy until node 20 was installed and used.
  - Install Node 20 (used the official wizard...)
    ```shell
    ...okiapp (main)
    $ node -v
    v20.13.1

    ...okiapp (main)
    $ npm outdated
    Package               Current  Wanted  Latest  Location                           Depended by
    @types/react           18.3.2  18.3.3  18.3.3  node_modules/@types/react          okiapp
    @vitejs/plugin-react    4.2.1   4.3.0   4.3.0  node_modules/@vitejs/plugin-react  okiapp
    eslint                 8.57.0  8.57.0   9.3.0  node_modules/eslint                okiapp
    ```
  - Update project

    ```shell
    ...okiapp (main)
    $ npm update

    added 17 packages, removed 26 packages, changed 39 packages, and audited 407 packages in 27s

    133 packages are looking for funding
      run `npm fund` for details

    2 critical severity vulnerabilities

    Some issues need review, and may require choosing
    a different dependency.

    Run `npm audit` for details.

    ...okiapp (main)
    $ npm outdated
    Package  Current  Wanted  Latest  Location             Depended by
    eslint    8.57.0  8.57.0   9.3.0  node_modules/eslint  okiapp
    ```

    Issue persisted...

    - clear cache

    ```shell
    jobs:
      build:
        runs-on: ubuntu-latest

        steps:
          - name: Checkout code
            uses: actions/checkout@v3

          - name: Setup Node.js
            uses: actions/setup-node@v3
            with:
              node-version: 20
              cache: 'npm' # Clear the npm cache to avoid any issues with outdated dependencies
    ```

    Issue persisted...

    - update project dependencies

## <span style= "color:gold;">Takeaways</span>

<span style= "color:white;">Selection+Ctrl+Shift+P-> _Emmet: wrap with abbreviation_ -> div</span>

<span style= "color:white;">[Tailwind dont need flexbox](https://youtu.be/x1RJ5Q09PqM?t=261)</span>

<span style= "color:white;">[Deploying a Static Vite Site](https://vitejs.dev/guide/static-deploy) </span>

## Peer Review
**Brent S.** <span style="color:gold;">√</span>
- Ryukyu Travel Page should have a lighter background or be white.
  - <span style="color:white;">Header</span><span style="color:gold;">√</span>
- The taxis are not daikos.
  - <span style="color:white;">Modal-taxi</span></span><span style="color:gold;">√</span>
- When clicking on websites such as Lynda's or Brent's hyperlinks, code "Open link in new tab", or "Open link in new window".
  - <span style="color:white;">Alerts x2</span><span style="color:gold;">√</span>
- Shisa's could be bigger on home page.
  - <span style="color:white;">Header</span><span style="color:gold;">√</span>
- Add words to the links on the side (pictures are not easy to recognize).
  - <span style="color:white;">Sidebar (intentional omission due to multi-national audience)</span><span style="color:gold;">√</span>
- Left-Right arrows a little hidden on the food.
  - <span style="color:white;">Food carousel</span><span style="color:gold;">√</span>
- x in Lynk Ynk Tattoos does not close anything.
  - <span style="color:white;">Feature w/alert, not a bug?</span><span style="color:gold;">√</span>
- Add, maybe the english equivalent of the food names to the bold names also.
  - <span style="color:white;">Maybe Accordian isnt optimal?</span><span style="color:gold;">√</span>
- Sun City Shopping Arcade left/right is not very visible.
  - <span style="color:white;">Shopping Carousel</span><span style="color:gold;">√</span>
- Can hardly see the text on the bottom of the page "2024 Deltafive-Piya".
  - <span style="color:white;">Footer</span><span style="color:gold;">√</span>
- PARCO City should be PARCO CITY or Parco City.
  - <span style="color:white;">Shopping Carousel</span>

**Hitomi S. (1-on-1 videocall)** <span style="color:gold;">√</span>
- Kanji/Katakana/Hiragana Review<span style="color:gold;">√</span>
- Hogen Review<span style="color:gold;">√</span>

## <span style= "color:gold;">Post Checklist √</span>

- Inspect:
  - functional stress-test √
  - alt descriptions √
  - documentation √
  
- Future Patches:
  - ShoppingCarousel Position
  - Carousel Watermarks Positioning

## <span style= "color:gold;">Resources</span>

[Okinawa Proverbs](https://www.aonghas-crowe.com/hogen/tag/Okinawan+Proverbs)

[Okinawa bank resource](https://www.okinawa-bank.co.jp/shop_atm_search/maps/index_shop_atm@kubun@atm.html)

[Katakana Translator](https://www.sljfaq.org/cgi/e2k.cgi)

[Google reviews photos](https://www.google.com/maps/contrib/116082349573020475280/photos/@26.3178186,127.8208574,16z/data=!4m3!8m2!3m1!1e1?entry=ttu)

[Google Drive - Police Hospital](https://drive.google.com/drive/folders/1l-mreFypOtCY0iglZNaHtHKK18ThTVZt)

[Google reviews photos](https://www.google.com/maps/place/Pizza+House+Jr./@26.324732,127.754404,3a,54.2y/data=!3m8!1e2!3m6!1sAF1QipMA1kyb-Q65NnDcuAZ26E7T6KOGvJyCzaNDfbOw!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMA1kyb-Q65NnDcuAZ26E7T6KOGvJyCzaNDfbOw%3Dw298-h298-k-no!7i2992!8i2992!4m13!1m2!2m1!1spizza+house+jr!3m9!1s0x34e5130817ea9a25:0xa2c03709bf118906!8m2!3d26.324732!4d127.754404!10e5!14m1!1BCgIYIA!15sCg5waXp6YSBob3VzZSBqciIDiAEBWhAiDnBpenphIGhvdXNlIGpykgEKcmVzdGF1cmFudOABAA!16s%2Fg%2F1tf84vfg?entry=ttu)

Photos

1. Hello - SANSHIN
   - A. SPIRIT
   - B. CULTURAL
   - C. ABUNDANT
   - D. HISTORICAL
   - E. FESTIVE
2. Food - TEBICHI
   - B. SOKI
   - A. SANMAINIKU
   - C. CHAMPURU
   - D. GOYA
   - E. NAKAMI
3. Activity - XXXXXX
   - A. xxxxxxxx
   - B. xxxxxxxx
   - C. xxxxxxxx
   - D. xxxxxxxx
   - E. xxxxxxxx
4. Shopping - XXXXXX
   - A. xxxxxxxx
   - B. xxxxxxxx
   - C. xxxxxxxx
   - D. xxxxxxxx
   - E. xxxxxxxx
5. Hotels - XXXXXX
   - A. xxxxxxxx
   - B. xxxxxxxx
   - C. xxxxxxxx
   - D. xxxxxxxx
   - E. xxxxxxxx
6. Banking - XXXXXX
   - A. xxxxxxxx
   - B. xxxxxxxx
   - C. xxxxxxxx
   - D. xxxxxxxx
   - E. xxxxxxxx
7. Hospital - XXXXXX
   - A. xxxxxxxx
   - B. xxxxxxxx
   - C. xxxxxxxx
   - D. xxxxxxxx
   - E. xxxxxxxx
8. Police - XXXXXX
   - A. xxxxxxxx
   - B. xxxxxxxx
   - C. xxxxxxxx
   - D. xxxxxxxx
   - E. xxxxxxxx
9. Taxi - XXXXXX
   - A. xxxxxxxx
   - B. xxxxxxxx
   - C. xxxxxxxx
   - D. xxxxxxxx
   - E. xxxxxxxx