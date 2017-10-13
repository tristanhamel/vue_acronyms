# vue acronyms

## overview

This repository contains a directive and a component to automatically display acronym disambiguation in a title attribute or in a custom tooltip

## usage

### disambiguation in title

Import the acronyms directive into your vue app.
Add it as an attribute in your template and pass it an object containing all the acronyms to look for as keys and their disambiguation as value:
```` html
<template>
    <p v-acronyms="myMap">
        Some Guy: dude i saw sumthin weird 2day 
        Another Guy: lol?
    </p>
<template>
...
<script>
...
    const myMap = {
        lol: 'laugh(ing) out loud',
        '2day': 'today'
    }
...
</script>
```` 
The template will be transformed to the following:
```` html
<p v-acronyms="myMap">
    Some Guy: dude i saw sumthin weird <span title="today">2day</span> 
    Another Guy: <span title="laugh(ing) out loud">lol</span> ?
</p>
````

### disambiguation in tooltip
Import acronymsTooltip and add it to your vue app components. Use in your template as follows:
```` html
<template>
    <th-acronyms-tooltip acronyms="myMap">
        <p>
            Some Guy: dude i saw sumthin weird 2day 
            Another Guy: lol?
        </p>
    </th-acronyms-tooltip>
<template>
...
<script>
...
    const myMap = {
        lol: '<a href="...>laugh(ing) out loud</a>',
        '2day': '<a href="...>today</a>'
    }
...
</script>
```` 
The disambiguation string can contain arbitrary html which will be displayed in the tooltip.

The component accepts an optional options attribute:
````
<th-acronyms-tooltip acronyms="myMap"
                  options: "{
                    showOnMouseEnter: [false], 
                    hideOnMouseLeave: [showOnMouseEnter]
                  }">
...
</th-acronyms-tooltip>

````
The tooltip can be completely styled using the following classes: th-acronyms, th-tooltip, th-tooltip-container
