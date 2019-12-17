# Reflect:

* Reflect is like object API grouped together and accessible via Reflect.methodYouWantToUse();
* Reflect is used with Proxy Api
* 
* 

# Proxy:

* Proxy is an wrapper for another object
* In proxy we set traps that modify eg. access to wrapped object properties.
* Proxy mimic Reflect Api for traps.
* Proxy constructor takes two args: object to wrap and handler with all the reflect methods to interact
* typically you would hide original object and expose only proxy for further interacting.  