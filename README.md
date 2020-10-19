# VR-tour-app-react.js
add an immersive and interactive views to your React.js applications
# What's this?
in this tutorial you will learn how to add 360 images and VR experiences into your React applications and Place your visitors in the center of the action, ensuring there's something to see and experience at every angle 📐
# Getting Started 💪
we will be using 2 Facebook technologies  ⬇️
 1. React js 
 2. React. 360 (to reander 360 images and VR scenes )
# The Roadmap 🌏
 1. ### Create the VR environment 
    init new react 360 app , learn how to add new components and place them in your vr environment 
 2. ### Integrate the VR app inside reactjs app 
    create our webAPP and style it before integrating the VR environment 
# Create the VR environment   
  ### 1- init new react 360 project
  Before getting started, you'll need to install Node.js on your computer , Once Node has been installed Open a terminal and run the following commands 

    npm install -g react-360-cli
   

After installation, we can use it to generate the initial code for our first project

    react-360 init VR_ENV
    
This creates a new directory called VR_ENV, with all of the files needed to run your project. Enter the directory to view them and run the npm start command 
    
    cd Hello360
to start the development server ⬇️
    
    npm start
To see your project, open your web browser and navigate to http://localhost:8081/index.html .
  
  Congratulations now you have your first webVR app running on your server 💪🥁🥁
### 2- Add Background changer 
**Role : the background changer helps us to move between rooms in our VR Tour app**

**first** let's remove the default code in VR_ENV class at `index.js` and let only one View tag ( every class must contain at least one View tag ) , then add inside of it 3 `VrButton` components with an `Image` inside each component **The VrButton is a utility class that detects click-type actions across a variety of input devices** the `onClick` event must contain the function that will help us to change the background Image (room)
```javascript
  <View style={{
     width: 1000,
     height: 1100,
     justifyContent: 'center',
     alignItems: 'flex-end',}}
  >
        <View style={styles.panel1}>
          <VrButton onClick={() => this.changeBG(1)}>                
              <Image style={{width: 100.0, height:80.0 , borderRadius: 10, }} source={{uri: './static_assets/bg1.jpg'   }} />
          </VrButton>
          <VrButton onClick={() => this.changeBG(2)}>                
              <Image style={{width: 100.0, height:80.0 ,borderRadius: 10, }} source={{uri: './static_assets/bg2.jpg'   }} />
          </VrButton>

          <VrButton onClick={() => this.changeBG(3)}>  
              <Image style={{width: 100.0, height:80.0 ,borderRadius: 10, }} source={{uri: './static_assets/bg3.jpg'   }} />
          </VrButton>
        </View>
   </View>
```
🥁🥁 congratulations now you have the background changer on your VR environment 🥁🥁
**Seconde** let's create `changeBG(x)` function that will take x  as parameter in order to change the background image 
 ```javascript
  changeBG(x){
    Environment.setBackgroundImage(asset(`bg${x}.jpg`));
  }
```
> don't forget to import `import {Environment} from 'react-360';`.

> add 3 images to `static_assets` folder and respenct naming convention example `bg1.jpg` .
     
# Integrate the VR app inside reactjs app

  ### 1- create new react project
  first we have to create a new react.js app
  ```
  npx create-react-app mon-app

cd mon-app

npm start
```
then we add some styling ( header and text panel ) to get it just go and check `app.js` & `app.css` and `Header.js` for the NavBar ✅

### 2-integrating the VR environment 🤔
before we start this part of the tutorial your have to make sure that ur app is running on `http://localhost:8081/index.html` 

The recommended manner of embedding React 360 content into a larger web page is to use an Iframe. Point the src attribute of your <iframe> tag to your project's index HTML file. This technique guarantees that your application won't interfere with the parent web page, and the parent web page won't be able to slow down rendering of your app 

```javascript
  function App() {
  return (
    <div className="App">
      
      <Header/>
      <div className="app__home">
        <div className="app__vrframe">
          <iframe src="http://localhost:8081/index.html" width="100%" height="500"></iframe>
        </div>
        <div className="app__card">
          <b style={{color:"#fff"}}>Planetarium</b>
          <p className="">The dome can seat up to 109 visitors, has an inclination of 25 degrees, and gives you the experience of not only watching a show, but also of being in the middle of the action in the Universe. This, combined with the most up-to-date programmes for our planetarium shows, creates a stunning experience that completely immerses you in space.</p>
        </div>
      </div>
      
    </div>
  );
}
```
congratulations now you have your first VR app (panoramic view) running in React.js application 🎉
