const xCookies = {
	get: name => {
		if (document.cookie.length === 0) {
      return null;
    }

		let begin = document.cookie.indexOf(`${name}=`);

    if (begin === -1) {
			return null;
    }

		begin = begin + name.length + 1;

    let end = document.cookie.indexOf(';', begin);

    if (end == -1) {
			end = document.cookie.length;
    }

		return decodeURIComponent( document.cookie.substring(begin, end) );
	},
	set: (name, value, days, hours) => {
		if (days > 0 || hours > 0) {
      const hs = hours > 0 ? hours : 24;
      const h = 1000*60*60;
      const milliseconds = days > 0 ? h*hs*days : h*hs;
			const time = new Date().getTime() + milliseconds;
			const date =  new Date(time).toUTCString();
			document.cookie = name + `=${encodeURIComponent(value)}; expires=${date}; path=/`;
		} else {
			document.cookie = name + `=${encodeURIComponent(value)}; path=/`
		}
	},
	remove: name => {
		if (name) {
      document.cookie = name + `=''; expires=${new Date(1).toUTCString()}`;
    }
	},
	getAll: () => {
		if (document.cookie.length === 0) {
      return null;
    }

    const cookies = {};
		document.cookie.split(';').forEach(pairs => {
			const pair = pairs.split('=');
			cookies[ (pair[0]+'').trim() ] = decodeURIComponent(pair[1]);
    })

		return cookies;
	},
	check: name => {
		name = xCookies.get(name);
		return (name && name !== '') ? true : false;
	}
}
// examples
// console.log(xCookies.set('test', 'test', 5));
// console.log(xCookies.set('test2', 'test2', 0, 5));
// console.log(xCookies.getAll());
// console.log(xCookies.get('test'));
// console.log(xCookies.check('test'));
// console.log(xCookies.remove('test2'));

// app
const body = document.querySelector('body');
const buttons = document.querySelectorAll('[data-js="button"]');

const inpName = document.querySelector('[data-js="inpName"]');
const inpPassword = document.querySelector('[data-js="inpPassword"]');
const changeInputType = document.querySelector('[data-js="changeInputType"]');

const cookies = document.querySelector('[data-js="cookies"]');

// show/hide
changeInputType.addEventListener('click', evt => {
  if (inpPassword.getAttribute('type') === 'password') {
    inpPassword.setAttribute('type', 'text');
    changeInputType.innerHTML = 'hide';
  } else {
    inpPassword.setAttribute('type', 'password');
    changeInputType.innerHTML = 'show';
  }
});

// theme colors
buttons.forEach(button => {
  button.addEventListener('click', evt => {
    const color = evt.target.getAttribute('data-color');
    body.className = '';
    body.classList.add(color);
    xCookies.set('theme', color, 1);
  });
});

if (!xCookies.check('name')) {
  setTimeout(() => {
    const prName = prompt("Informe o seu nome?");

    if (prName && prName !== '') {
      xCookies.set('name', prName, 0, 5);
      inpName.value = prName;
    }
  }, 1000);
}

if (xCookies.check('theme')) {
  body.classList.add(xCookies.get('theme'));
}

if (xCookies.check('name')) {
  inpName.value = xCookies.get('name');
}

cookies.innerHTML = JSON.stringify(xCookies.getAll());

// Check for refresh keys
// const f5key = 116; // f5
// const rkey = 82; // r
// const modkey = [17, 224, 91, 93]; // ctrl, left or right ⌘ key (firefox), Windows Key / Left ⌘ / Chromebook Search key, Windows Menu / Right ⌘

// let isRefresh = false;
// let modifierPressed = false;

// document.addEventListener('keydown', evt => {
//   if (evt.which == f5key || modifierPressed && evt.which == rkey) {
//     isRefresh = true;
//   }

//   if (modkey.indexOf(evt.which) >= 0) {
//     modifierPressed = true;
//   }
// });

// document.addEventListener('keyup', evt => {
//   if (evt.which == f5key || evt.which == rkey) {
//     isRefresh = false;
//   }

//   if (modkey.indexOf(evt.which) >= 0) {
//     modifierPressed = false;
//   }
// });

// unload
// window.onbeforeunload = () => {
//   if (!isRefresh) {
//     xCookies.remove('name');
//     console.log('cookie removed');
//   }
// }

