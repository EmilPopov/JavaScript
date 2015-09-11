function solve() {

    var player = (function() {
        var playerID = 0,
            player = {
                init: function(name) {
                    playerID += 1;
                    this.name = name;
                    this.id = playerID;
                    this.playlists = [];
                    return this;
                },
                getPlayer: function(name) {
                    return Object.create(player).init(name);
                },

                addPlaylist: function(playlistToAdd) {
                    this.playlists.push(playlistToAdd);
                    return this;
                },

                getPlaylistById: function(id) {
                    for (var i = 0; i < this.playlists.length; i++) {
                        if (this.playlists[i].id === id) {
                            return this.playlists[i];
                        }
                    }
                    return null;

                },
            };
        return player;
    }());
    //--------------------------------------------------------------------------------------
    var Playlist = (function() {
        var playlistID = 0;
        var playlist = {
            init: function(name) {
                playlistID += 1;
                this.name = name;
                this.id = playlistID;
                this.playables = [];
                return this;
            },
            getPlaylist: function(name) {
                return Object.create(playlist).init(name);
            },

            removePlaylistById: function(id) {
                var index;
                this.playlists.forEach(function(playlist, position) {
                    if (playlist.id === id) {
                        index = position;
                    }
                });

                if (index > -1) {
                    this.playlists.splice(index, 1);
                }

                return this;
            },

            removePlaylistById: function(input) {
                var index;
                this.playlists.forEach(function(playlist, position) {
                    if (playlist.id === input.id) {
                        index = position;
                    }
                });

                if (index > -1) {
                    this.playlists.splice(index, 1);
                }

                return this;
            },

            addPlayable: function(playable) {
                this.playables.push(playable);
                return this;
            },

            getPlayableById: function(id) {
                for (var i = 0; i < this.playables.length; i++) {
                    if (this.playables[i].id === id) {
                        return this.playables[i];
                    }
                }
                return null;

            },

            removePlayable: function(id) {
                var index;
                this.playables.forEach(function(playables, position) {
                    if (playables.id === id) {
                        index = position;
                    }
                });

                if (index > -1) {
                    this.playables.splice(index, 1);
                }

                return this;
            },

            removePlayable: function(input) {
                var index;
                this.playables.forEach(function(playables, position) {
                    if (playables.id === input.id) {
                        index = position;
                    }
                });

                if (index > -1) {
                    this.playables.splice(index, 1);
                }

                return this;
            },

            listPlaylables:function(page, size){
               
            }


        };
        return playlist;

    })();


    var module = {
        getPlayer: function(name) {
            return player.getPlayer(name);
            // returns a new player instance with the provided name
        },
        getPlaylist: function(name) {
            return Playlist.getPlaylist(name);
        },
        getAudio: function(title, author, length) {
            //returns a new audio instance with the provided title, author and length
        },
        getVideo: function(title, author, imdbRating) {
            //returns a new video instance with the provided title, author and imdbRating
        }
    };
    return module;
}
module.exports = solve;
var test = solve();
var player = test.getPlayer('Ivan');
var playlist = test.getPlaylist('GOGO');
var playlist2 = test.getPlaylist('HoHO');
var playlist3 = test.getPlaylist('IoIio');
player.addPlaylist(playlist).addPlaylist(playlist2).addPlaylist(playlist3);
// console.log(player.palylists);
// console.log(player.getPlaylistById(2));
playlist.addPlayable('play1');
console.log(playlist.playables);