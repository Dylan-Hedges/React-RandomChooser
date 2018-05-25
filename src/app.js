console.log('app.js is running');


const app = {
  title: 'Main title',
  subtitle: 'Subtitle',
  options: ['one', 'two']
};

const template = (
  <div>
    <h1>{app.title}</h1>
    //Display a subtitle if there is one
    {app.subtitle && <p>{app.subtitle}</p>}
    //If the options array has elements display 'Here are...' if it has no elements display 'No options'
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>;
    <ol>
      <li>One</li>
      <li>Two</li>
    </ol>
  </div>
);

const user = {
  name: 'John',
  age: 20,
  location: 'New York'
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : ' Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
