# Summernote @mention plugin
## Usage
1. Include the `bundle.js` file in your javascript.
2. In the `callbacks` option passed to Summernote, include the configuration object.

## Configuration Object
The configuration object that should be passed into the `callbacks` option to Summernote has the following structure:

```javascript
{
  getSuggestions: (value) => ['Array of strings'],
  onSelect: (value) => {},
}
```
This object should be passed via the `summernoteAtMention` key within the `callbacks` option passed to Summernote.

The first function `getSuggestions` takes in a string via the `value` argument and should return a list of strings that will be presented as options to the user.

The second function `onSelect` gets called once a user selects an option using the `ENTER` key. It is passed the selected value via the `value` argument. If no such function is provided, the default behavior is to fill in the the text after the `@` sign with the selected option.

## Example

```javascript
$('#summernote').summernote({
  placeholder: 'Placeholder',
  toolbar: [['style', ['style']]],
  callbacks: {
    summernoteAtMention: {
      getSuggestions: = (value) => {
        const userEmails = ['cecilia@email.co', 'pedro@email.co'];
        return userEmails.filter((email) => {
          return sample.includes(value) && sample !== value
        });
      },
    },
  },
})
```

## Contributing
All ideas and contributions are welcome! Please use the `Issues` tab.