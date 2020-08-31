# beps index

[Reference links](https://github.com/bittorrent/bittorrent.org)

* [Index of BitTorrent Enhancement Proposals](http://www.bittorrent.org/beps/bep_0000.html)
* [The BitTorrent Enhancement Proposal Process](http://www.bittorrent.org/beps/bep_0001.html)
* [Sample reStructured Text BEP Template](http://www.bittorrent.org/beps/bep_0002.html)
* [The BitTorrent Protocol Specification](http://www.bittorrent.org/beps/bep_0003.html)

## Mark

### A BitTorrent file distribution consists of these entities

* An ordinary web server
* A static 'metainfo' file
* A BitTorrent tracker
* An 'original' downloader
* The end user web browsers
* The end user downloaders

### To start serving, a host goes through the following steps

* Start running a tracker (or, more likely, have one running already).
* Start running an ordinary web server, such as apache, or have one already.
* Associate the extension .torrent with mimetype application/x-bittorrent on their web server (or have done so already).
* Generate a metainfo (.torrent) file using the complete file to be served and the URL of the tracker.
* Put the metainfo file on the web server.
* Link to the metainfo (.torrent) file from some other web page.
* Start a downloader which already has the complete file (the 'origin').

### To start downloading, a user does the following

* Install BitTorrent (or have done so already).
* Surf the web.
* Click on a link to a .torrent file.
* Select where to save the file locally, or select a partial download to resume.
* Wait for download to complete.
* Tell downloader to exit (it keeps uploading until this happens).

### bencoding

Jedi Memo: I don't understand this concept, without any ideas. **2020.8.31 17:27 PM**

* Strings are length-prefixed base ten followed by a colon and the string. For example 4:spam corresponds to 'spam'.

* Integers are represented by an 'i' followed by the number in base 10 followed by an 'e'. For example i3e corresponds to 3 and i-3e corresponds to -3. Integers have no size limitation. i-0e is invalid. All encodings with a leading zero, such as i03e, are invalid, other than i0e, which of course corresponds to 0.

* Lists are encoded as an 'l' followed by their elements (also bencoded) followed by an 'e'. For example l4:spam4:eggse corresponds to ['spam', 'eggs'].

* Dictionaries are encoded as a 'd' followed by a list of alternating keys and their corresponding values followed by an 'e'. For example, d3:cow3:moo4:spam4:eggse corresponds to {'cow': 'moo', 'spam': 'eggs'} and d4:spaml1:a1:bee corresponds to {'spam': ['a', 'b']}. Keys must be strings and appear in sorted order (sorted as raw strings, not alphanumerics).

