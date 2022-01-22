const xhr = new XMLHttpRequest();
xhr.open("GET", "http://qq.com:8888/friends.json");
xhr.onreadystatechange = () => {
	if (xhr.readyState === 4 && xhr.status === 200) {
		console.log(xhr.response);
	}
};

xhr.send();
