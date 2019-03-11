[logo.jpg](https://github.com/JPilawka/PomodoroToDo/blob/master/src/assets/gitimages/logo.jpg)

##Working example:
http://runestonedesigns.com/pomodorotodo/

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Usage

## Editor.
At te beginning to do list is empty. You can add element simply by clicking on "Show Editor" button:

[showeditor.jpg](https://github.com/JPilawka/PomodoroToDo/blob/master/src/assets/gitimages/showeditor.jpg)

editing name, time and description and clicking "Add new item":

[editor.jpg](https://github.com/JPilawka/PomodoroToDo/blob/master/src/assets/gitimages/editor.jpg)

Form of New Item is filled automatically after adding elements. Based on element index it will put:
  - even elements: "Work" as a name and "25" mins as time
  - odd elements: "Break" as a name and "5" mins as time
You can edit them as you need and delete elements with "X" on the right.

You can also reset whole list to fresh one by clicking red button "Reset list"

## ToDo List
Each time element is edited or added klist of all elements will be updated in Todo List module:

[lis.jpg](https://github.com/JPilawka/PomodoroToDo/blob/master/src/assets/gitimages/list.jpg)

Total time will be also updated. It's overall time of list.

There are 3 colours in list (although each base on index of element, not the type):
 - Blue - "Work" item
 - Red - "Break" item
 - Green - Current element.
 
 As default descriptions of elements are hidden. You can show all descriptions by clicking "Show more"
 
 ## Clock
 
 [clock.jpg](https://github.com/JPilawka/PomodoroToDo/blob/master/src/assets/gitimages/clock.jpg)
 
 This module contains two sections:
 - Timer - Shows time left to go to the next section.
 - Controls:
  - Reset - resets timer to max time of current element
  - Pause
  - Next element
