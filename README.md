# `componentOf()`

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
