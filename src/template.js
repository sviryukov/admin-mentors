export default (title, body, script, css) => {
    return `<!DOCTYPE html>` +
        `<html lang="ru">` +
			`<head>` +
				`<meta http-equiv="Content-Type" content="text/html; charset=utf-8">` +
				`<meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, shrink-to-fit=no">` +
				`<title>${title}</title>` +
				`<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>` +
				`<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>` +
				`<link rel="stylesheet" href="/css/main.css" type="text/css"/>` +
				`<link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon">` +
				`<style id="jss-server-side">${css}</style>` +
			`</head>` +
			`<body>` +
				`<div id="root">${body}</div>` +
				`<script src="/js/${script}.js"></script>` +
			`</body>` +
        `</html>`;
};