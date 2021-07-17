# Bumby Wool Builder
Helps Bumby Wool customers to visualize their custom wool clothing

## How to Use
### Adding/Removing Colors
The colors are controled by a JSON file called `colors.json` in the root folder of the project. In the `colors.json` file there is an array of color objects. Each color object looks like this:
```
{ "name": "Hops", "patternId": {"fill": "#007258"} }
```
> Each color object in the array will be followed by a `,` at the end of the line **except** for the very last color at the end of the array

#### Adding a color
1. Go to the (colors.json)[https://github.com/Bumby-Wool/builder/blob/main/colors.json] file.
2. Click on the `pencil icon` to edit the file
> If you don't have the edit button for the file be sure you have signed-in to github with an account that has edit persmission for theis repo

![image](https://user-images.githubusercontent.com/2077589/126038193-e470d8dd-a43e-4a1e-bc63-12fcc7d4a604.png)


3. Now copy an existing color object and paste it into the array
> The colors in the website are displayed in the same order they are in this array. 
> Also the first color in the array is the default color display when viewing an item.

![image](https://user-images.githubusercontent.com/2077589/126038307-306805a0-30db-49db-8ded-06517124cc3b.png)


4. Next modify the pasted color object's name and hex code to be the new color

![image](https://user-images.githubusercontent.com/2077589/126038355-e1c8ff48-3406-4c4f-8cbf-862ed004c4ae.png)


5. Scroll to the bottom of the page and then click the `Commit Changes` button to save your changes. Optionally you can add a description with details of what changes you made.

![image](https://user-images.githubusercontent.com/2077589/126038403-211800c8-4abf-4d79-bd64-39c66cf5130a.png)


#### Removing a color
1. Go to the (colors.json)[https://github.com/Bumby-Wool/builder/blob/main/colors.json] file.
2. Click on the `pencil icon` to edit the file
> If you don't have the edit button for the file be sure you have signed-in to github with an account that has edit persmission for theis repo

![image](https://user-images.githubusercontent.com/2077589/126038193-e470d8dd-a43e-4a1e-bc63-12fcc7d4a604.png)


3. Select the whole line of the color you'd like to delete

![image](https://user-images.githubusercontent.com/2077589/126038486-830c9f83-ed86-4908-9072-a2c738fd6c64.png)


4. Then delete that line

![image](https://user-images.githubusercontent.com/2077589/126038525-5e0cd036-b557-49c6-bfa9-e988d34f534f.png)


5. Scroll to the bottom of the page and then click the `Commit Changes` button to save your changes. Optionally you can add a description with details of what changes you made.

![image](https://user-images.githubusercontent.com/2077589/126038403-211800c8-4abf-4d79-bd64-39c66cf5130a.png)


## How to Contribute
See the `README_DEVELOPER.md` page for more technical details
