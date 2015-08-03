class MainController {
  constructor () {
    'ngInject';

    // TOP SIDEBAR
    this.topSidebars = [
      {
        header: "Calling All Physicals!",
        text: [
          "Come in between July 1, 2015 and August 31, 2015 for any sports or school physical for just $20!",
          "Looking forward to seeing you here!"
        ]
      },
      {
        header: "Urgent Care",
        text: [
          "Our Emergency Medicine doctors can diagnose and treat a wide variety of illnessess and injuries.",
          "You only need to go to the emergency department to be admitted for extended care or surgery."
        ]
      },
      {
        header: "Self-pay prices",
        text: [
          "We guarantee the lowest self-pay prices in the area."
        ]
      },
      {
        header: "Hours of operation",
        text: [
          "Open 7 days a week",
          "from 10am to 8pm.",
          "We observe major holidays"
        ]
      }
    ];

    // QUOTE
    this.quote = {
      title: "If You Feel Sick You Should Not Wait",
      text: "We are passionate about caring for your health and providing exceptional urgent care"
    };


    // CUSTOM SERVICES
    this.customServices = [
      {
        icon: "favorite",
        title: "Cardio Health",
        text: [
          "Our clinic is equipped with EKG, X-ray and Laboratory."
        ]
      },
      {
        icon: "local_hospital",
        title: "Medical Treatment",
        text: [
          "We administer breathing treatments, repair lacerations, dispense medications intravenously, remove foreign objects from the eyes, and more."
        ]
      },
      {
        icon: "photo_camera",
        title: "Photo Gallery",
        text: [
          "Check out our pictures!"
        ]
      },
      {
        icon: "accessibility",
        title: "Aging Clinic",
        text: [
          "We organize regular meetings with clients who want to be healthy, youthful and energetic."
        ]
      },
    ];
  }
}

export default MainController;
