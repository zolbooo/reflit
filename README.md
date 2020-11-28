# ReFlit
ReFlit is simple component builder inspired by Flutter. It is also combinable with JSX syntax:
```jsx
import Link from 'next/link';
import { FC, Text, View } from 'reflit';

const Header = FC(() => (
  <Link href="/">
    <a>
      {View(
        { className: 'py-4 w-full flex flex-row justify-center' },
        Text(
          { className: 'mx-auto uppercase text-2xl' },
          Text({ className: 'text-green-500' }, 'ReFlit'),
          Text({ className: 'ml-2 text-blue-500' }, 'is'),
          Text({ className: 'ml-2 text-red-500' }, 'fun'),
        ),
      )}
    </a>
  </Link>
));

export default Header;
```

## Getting started
Just install `reflit` package: `npm i reflit` or `yarn add reflit` and you are all set!

## Usage
There are simple components, which are mapped internally to HTML tags:
| ReFlit component | HTML tag |
| --- | --- |
| View | `<div>` |
| Text | `<span>` |
| Link | `<a>` |
| Image | `<img>` |
| Button | `<button>` |
| Form | `<form>` |
| Input | `<input>` |
| Label | `<label>` |
| Paragraph | `<p>` |
| LineBreak | `<br>` |
| List | `<ul>` |
| OrderedList | `<ol>` |
| ListItem | `<li>` |

They accept props as React intrinsic elements. All components accept props as first argument and the rest of args are children.


### Functional components
Regular reflit functional components break Rules of Hooks.
If you want to use Hooks in the ReFlit component, you might want to use `FC` or `FC.void` functional component builders.
They are not breaking Rules, as they are calling JSX internally. Usage:
```jsx
import { View, Text, Button } from 'reflit';

const Counter = FC(() => {
  const [count, setCount] = useState(0);
  
  return View(
    { id: 'counter' },
    Text({}, count),
    Button({
      onClick: () => setCount(oldCount => oldCount + 1),
    }, '+'), 
  );
  /*
    Or using JSX:
     <div id="counter">
        <span>{count}</span>
        <button onClick={() => setCount(oldCount => oldCount + 1)}>
          +
        </button>
     </div>
  */
});

export default Counter;
```
If you are using TypeScript, you can pass first type argument as type of props. Example:
```jsx
import { Image } from 'reflit';

const Illustation = FC<{ image: string }>(
  ({ image }) => Image({ src: image })
);

export default Illustation;
```

`FC.void` is void functional component builder. In other words, this is a component which does not accept `children`. For instance:
```jsx
import { View, Input, Label } from 'reflit';

const RadioButton = FC.void<{ name: string, label: string }&JSX.IntrinsicElements['input']>(
  ({ name, label, ...props }) => View(
    { className: 'flex flex-row items-center' },
    Input({ type: 'radio', name, ...props }),
    Label({}, label),
  ),
);

export default RadioButton;
```
If you used `FC`, you would encounter error, as sometimes this component would be called with `children` prop.
