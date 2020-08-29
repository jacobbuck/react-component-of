> # :rotating_light: Deprecated
> 
> This project is no longer being maintained. I'd recommend using `childrenOfType` from the [airbnb-prop-types](https://github.com/airbnb/prop-types) package instead.

# react-component-of

Custom prop type validator for checking React component types.

## Example

```
import componentOf from 'react-component-of';
import Button from './Button';

const ButtonGroup = ({children}) => (
	<div className="ButtonGroup">
		{children}
	</div>
);

ButtonGroup.propTypes = {
  children: componentOf([Button]).isRequired
};

export default ButtonGroup;
```
