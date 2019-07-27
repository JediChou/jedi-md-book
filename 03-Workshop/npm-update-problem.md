* url: http://jjasonclark.com/how-to-setup-node-behind-web-proxy/
- step 1: npm config set proxy http://proxy.company.com:8080
- step 2: npm config set https-proxy http://proxy.company.com:8080
- other advices
	- npm config set proxy http://"user:password"@proxy.server:1234
- other advices
	- step 1: npm config set strict-ssl false
	- step 2: npm config set registry "http://registry.npms.org/"
	- step 3: npm --proxy http://username:password@proxy.server:port
- other advices
	- step 1: npm config set proxy http://login:password@host:port
	- step 2: npm oncifg https-proxy http://login:password@host:port
- other advices (update .bowerrc file)
```
	{
		"proxy":"http://proxy.company.com:8080,
		"https-proxy":"http://proxy.company.com:8080",
		"directory":"vendor"
	}
```
