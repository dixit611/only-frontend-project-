const container = React.createElement(
  'div', 
  { className: 'container', id: 'container' }, 
  [
    React.createElement(
      'section', 
      { key: 1 }, 
      [
        React.createElement('b', { key: 1 }, 'Welcome'),
        React.createElement('p', { key: 2 }, 'Welcome to'),
        React.createElement('i', { key: 3 }, 'Welcome to my'),
        React.createElement('br', { key: 13}),
        React.createElement('b', { key: 5 }, 'Welcome to my website!'),
        React.createElement('br', { key: 10 }),
        
      ],
      React.createElement('img', 
        { 
        key: 6, 
        src: 'https://tactless7.github.io/cv/img/icons/react_logo_2.png', 
        style: {
          width:200 , 
          backgroundColor: 'blue',
          borderRadius: 10,
          padding: 16,}
      }),
      React.createElement('br', { key: 10 }),
        React.createElement('img', 
          { 
          key: 7, 
          src: 'https://tactless7.github.io/cv/img/icons/react_logo_2.png', 
          style: {
            width:200 , 
            backgroundColor: 'red',
            borderRadius: 10,
            padding: 16,}
        }),
      React.createElement('br', { key: 12 }),
      React.createElement(
        'a', 
        {
           key: 4, 
           href: 'https://aman-dixit-portfo.netlify.app', 
           target: '_blank', 
           style:{
            padding:30, 
            color: 'black'
          }
        },
        React.createElement('button', { key: 6,
          className: 'hover-button',
          style:{
          color: 'black',
          fontSize:30,
        }}, 'Click')
      ),
      React.createElement('br', { key: 8 }),
      React.createElement('b', {key: 9 , style:{
        color: 'blue',
        fontSize: 20,
        margin:10,
      }}, 'Welcome to my website'),
    )
  ],
);

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(container);

