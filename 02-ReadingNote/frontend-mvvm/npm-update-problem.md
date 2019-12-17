# npm update problem

* [url](http://jjasonclark.com/how-to-setup-node-behind-web-proxy/)

* step 1: npm config set proxy [http://proxy.company.com:8080](blank)
* step 2: npm config set https-proxy [http://proxy.company.com:8080](blank)

* other advices
  * npm config set proxy [http://"user:password"@proxy.server:1234](blank)

* other advices
  * step 1: npm config set strict-ssl false
  * step 2: npm config set registry "[http://registry.npms.org/](blank)"
  * step 3: npm --proxy [http://username:password@proxy.server:port](blank)

* other advices
  * step 1: npm config set proxy [http://login:password@host:port](blank)
  * step 2: npm oncifg https-proxy [http://login:password@host:port](blank)

* other advices (update .bowerrc file)

```json
{
  "proxy":"http://proxy.company.com:8080,
  "https-proxy":"http://proxy.company.com:8080",
  "directory":"vendor"
}
```
