"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Articles", [
      {
        heading: "Post0",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non ullamcorper mauris, posuere tempus risus. Aliquam non nunc sodales, ultrices ligula a, scelerisque velit. Aenean semper sapien quis justo volutpat, vel semper tortor varius. Nam laoreet justo ut bibendum aliquet. Nullam maximus lacinia libero, at accumsan sem. Integer ac sapien metus. Donec tincidunt felis non eleifend vehicula. Curabitur interdum sem vel varius commodo. Nunc commodo pulvinar ullamcorper.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        heading: "Post1",
        content:
          "Nam hendrerit pulvinar faucibus. Donec a consectetur ligula. Suspendisse potenti. Cras consectetur quam sit amet dui suscipit, ut sagittis mauris scelerisque. Mauris ut ante orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque elementum, sapien a posuere egestas, sem magna cursus orci, quis ullamcorper urna orci id ipsum. Quisque ullamcorper, magna consectetur cursus placerat, orci lorem dictum nunc, mattis aliquam justo ex ut nisi. Suspendisse cursus ultrices risus non pellentesque. Integer pellentesque ipsum sed tortor cursus, at congue justo rhoncus. Sed sodales volutpat vestibulum. Phasellus quis lacinia mi.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        heading: "Post2",
        content:
          "Cras laoreet, leo et eleifend cursus, turpis magna hendrerit ex, eu semper nunc mauris in massa. Suspendisse potenti. Aliquam et magna magna. Suspendisse nisi metus, pharetra sit amet massa at, gravida lobortis magna. Vestibulum ut commodo urna, non vehicula ligula. Morbi sed risus suscipit, rutrum eros pharetra, ultricies nunc. Fusce enim tortor, imperdiet nec rutrum non, dictum in lacus. Etiam tempor viverra nisl, cursus venenatis odio. Quisque sit amet nisi cursus, efficitur tellus in, luctus ligula. Vestibulum malesuada tempor lacinia. Maecenas viverra posuere lorem, ac interdum massa dapibus ac.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        heading: "Post3",
        content:
          "Pellentesque pellentesque volutpat metus et convallis. Aliquam quam libero, facilisis ac enim sit amet, faucibus blandit urna. Pellentesque vel elit posuere, feugiat nibh quis, luctus justo. In at ultrices mauris, vel elementum purus. Integer ut ligula eget ex elementum sollicitudin ac vel orci. In venenatis erat sit amet velit hendrerit elementum in tempor augue. Maecenas fermentum lacinia porttitor. Fusce in mi sed turpis luctus iaculis.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        heading: "Post4",
        content:
          "Duis suscipit id tellus non mollis. Etiam nec sapien vel tellus ullamcorper aliquam at eu nisl. Nam at dolor blandit, eleifend augue sit amet, blandit nisi. Nullam nec convallis diam. Sed dignissim feugiat turpis, a vehicula libero venenatis at. Donec consectetur scelerisque dignissim. Aliquam venenatis, nisi eu sollicitudin convallis, risus lacus molestie sapien, nec congue nisi quam ut arcu. Phasellus id nisi vehicula, tincidunt magna vel, pretium odio. Maecenas ipsum sem, rhoncus in scelerisque non, tincidunt id nisi. Aenean finibus pretium ex nec pellentesque.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Articles", null, {});
  },
};
