function Album(albumTitle, albumYear, albumType, albumCover, albumLink, albumLinks) {
    this.albumTitle = albumTitle;
    this.albumYear  = albumYear;
    this.albumType  = albumType;
    this.albumCover = albumCover;
    this.albumLink  = albumLink;
    this.albumLinks = albumLinks;
    this.showDetails = ko.observable(false);
}
