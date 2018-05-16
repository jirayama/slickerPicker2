# slickerPicker
A simple and quick color picker plugin made in vanilla Javascript

Setting up the plugin
------
Include slickerPicker.js and slickerPicker.css 
```javascript
<script type="text/javascript" src="slickerPicker.js"></script>
<link rel="stylesheet" href="slickerPicker.css">
```

Instantiate slickerPicker.<br>
**slickerPicker will only accept 1 parameter of an option object**
You cannot attach it to an input element. 

```javascript
new slickerPicker({ target: "target" });
```
