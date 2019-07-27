# Project name:How to Build Android Music Streaming App

* [Website](https://www.liveedu.tv)
* [Reference URL](https://www.liveedu.tv/cleverchuk/R0Eym-how-to-build-android-music-streaming-app/)

What are the requirements?

* Android Studio and SDK here
* Oracle JDK here
* Basic understanding of the Java programming language
* Familiarity with xml
* Passion and Drive to learn
* A good dose of motivation

## Curriculum

### Session 1: Setup Environment

* Show where to get android studio
* Show where to get JDK
* Give an overview of Android Studio
  * How to create a project
  * How project is structured

* Give overview of gradle
  * Build files
  * Adding dependencies

* Explain the project
  * Set the porject goal
  * How to tell if the goal was archieve

* End Session 1

### Session 2: Building Data Class

* Explain Spotify web Api
* Give overview of JSON
* Start building data classes
  * BaseItem
  * Album
  * Artist
  * ExternalUrl
  * SImage
  * STrack
  * STracks
* End Session 2

### Session 3: Building Data Class cont'd

* Show auto import and how to create Emulators
* Introduce Retrofit
* Introduce Gson
* Introduce Picasso

* Show how to add dependencies
  * compile 'com.google.code.gson:gson:2.8.0'
  * compile 'com.squareup.retrofit2:retrofit:2.1.0'
  * compile 'com.squareup.retrofit2:convert-gson:2.1.0'
  * compile 'com.squareup.picasso:picasso:2.5.2'

* Build more Class and Interface
  * Config
  * SpotifyService(for retrofit)
  * Spotify(singleton)
  * SpotifyTrackAdapter(ListView)
* End session 3

### Session 4: UI Development

* Build track_list_row.xml
* Build activity_main.xml
* Build activity_player.xml
* Create Image assets
  * Pause
  * Play
  * Next
  * Previous
  * Shuffle
  * Repeat 1
  * Repeat all
* End session 4

### Sesion 5: Wiring the UI

* Code main activity to connect code to UI
* End Session 5

### Session 6: Wiring the UI, Testing, and Bug fixes

* Code play control buttons
* Test
* Debug
* End session 6

### Session 7: Wiring the UI, Testing, and Bug fixex cont'd

* Code player control buttons
* Add functionally to buttons
* Test
* Debug
* End session 7

### Session 8: Testing, and fixes cont'd

* Add Seek Bar
* Add song thumbnail
* Create a utility class
* Add functionality to Seek Bar
* Test
* Debug
* End session 8

### Session 9: Publishing to play store

* Show how to use keytool
* Show how to make different builds
* Build and sign APK
* Upload to Play store
* End session 9
