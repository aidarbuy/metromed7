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

		// NANO MEDICAL SCHOOL
		this.articles = [
			{
				header: "Upper Respiratory Infection:  An Often Misused Term"
				,date: "August 09, 2015"
				,text: [
					"Patients will often be given a diagnosis of Upper Respiratory Infection, also known as a URI, when in fact what they have is a Lower Respiratory Infection.",
					"The respiratory tract consists of the lungs, the pharynx (throat), the nasal passages, the sinuses, and the middle ears.  They are all connected.",
					"The dividing line between the upper and lower respiratory tracts is the vocal cords.  An infection which is primarily above the vocal cords is an upper respiratory infection.  An infection which is below the vocal cords is a lower respiratory infection.",
					"Upper Respiratory Infections include:  pharyngitis (sore throat), sinusitis (infection of the sinuses), nasopharyngitis (infection of the nasal passages),  otitis media (middle ear infection).",
					"Lower Respiratory Infections include:  bronchitis (an infection of the airways in the lungs), pneumonia (an infection of the lungs themselves).",
					"So, if you have a cough, and the doctor diagnoses you with an upper respiratory infection, you can show the doctor how smart you are by saying, “Don’t you really mean a lower respiratory infection?”  But wait until after you’ve gotten the prescription before doing that, because he might not take it very well."
				]
				,img: {
					title: "Upper respiratory infection image"
					,src: 'images/articles/respiratory.jpg'
					,alt: "upper respiratory infection"
				}
			},
			{
				header: "I have a cough - is it bronchitis?",
				date: "July 20, 2015",
				text: [
					"If a cough is due to an infection, then there are 2 common possibilities:  bronchitis and pneumonia.",
					"If the lungs are a bunch of grapes, an infection in the stems is bronchitis, and an infection in the grapes is pneumonia.",
					"Generally speaking, the way to tell the difference between bronchitis and pneumonia is:  with pneumonia you are short of breath.",
					"So, if you have a cough, and you are not short of breath, it's likely to be bronchitis.",
					"There are many exceptions to the above.  Here are some of them:",
					"You can have a cough due to asthma or COPD (chronic obstructive pulmonary disease) without having an infection at all.",
					"You can be short of breath with bronchitis if you also have asthma or COPD.",
					"As always, if you have a cough or any other medical symptom, be sure to see a health care professional so that the correct diagnosis and treatment can be provided.  For example, there are some life threatening causes of cough which are not listed in this article.  So don't take a chance with your health."
				],
				img: {
					title: "blueberries and blackberries",
					src: 'images/articles/cough.jpg',
					alt: "a handful of blueberries and blackberries"
				}
			},
			{
				header: "Now is the season for berries!",
				date: "May 27, 2015",
				text: [
					"Berries including strawberries, raspberries, blackberries and blueberries are known for their anti-inlammatory, anti-oxidant, anti-cancer activities."
				],
				img: {
					title: "blueberries and blackberries",
					src: 'images/articles/berries-150x150.jpg',
					alt: "a handful of blueberries and blackberries"
				}
			},
			{
				header: "Meningitis",
				date: "April 26, 2015",
				text: [
					"The most feared bacteria that causes meningitis is Neisseria meningitidis. It frequentrly colonizes the human nasal passages without causing an infection.",
					"It is unclear why disease occurs in some people and not in others.",
					"Most likely, there is a genetic predisposition.",
					"In order for the bacteria to get to the brain, it needs to cross the blood-brain barrier.",
					"The most virulent bacteria have specialised properties to break the tight junctions of the blood-brain barrier.",
					"Once inside the brain they multiply almost ininhibited.",
					"Most bacteria invade the brain through the blood stream. But they can also spread from the adjacent infected sites like sinuses or middle ear."
				],
				img: {
					title: "Dr. Roshelle Beckwith",
					src: 'images/articles/badge-roshelle.jpg',
					alt: "A badge of dr. Roshelle Beckwith"
				}
			},
			{
				header: "Nutritional Education and News",
				date: "March 25, 2015",
				text: [
					"Food for brain: broccoli, berries, salmon, mackerel, herring, lake trout, sardines and albacore tuna, spinach, nuts, curcumin."
				],
				img: {
					title: "a broccoli",
					src: 'images/articles/broccoli.jpg',
					alt: "a broccoli"
				}
			}
		];

		this.testimonials = [
			{
				name: 'Chris P.',
				age: 57,
				text: "Absolutely  fabulous.  Kind and detailed care, simple as that. Sort of makes you feel good being sick....   cjp",
				img: 'chrisp.jpg',
				city: 'Sterling, VA'
			}, 
			{
				name: 'Lori C.',
				age: 57,
				text: "If you need urgent care go here! The staff is first rate and the doctor is very smart, has an excellent bedside manner and Listens carefully. Very clean, efficient and safe.",
				img: 'lori.jpg',
				city: 'Alexandria, VA'
			}, 
			{
				name: 'Melanie M.',
				age: 32,
				text: "This urgent care center needed another 5 star-rating! The office was incredibly clean, and the entire staff got me in and out within an hour at most. There were even things for my four year old to do in the room while I was being examined. Trish was knowledgable and her bedside manner was fabulous. You can also send your prescriptions to your regular pharmacy (unlike another urgent care close by that makes you fill on-site) and after starting my treatments I am starting to feel better! Thanks! We will certainly be back here!",
				img: 'melanie.jpg',
				city: 'Leesburg, VA'
			}, 
			{
				name: 'Ahmad T.',
				age: 26,
				text: "My first time at this urgent care, I highly recommend them! The staff here is extremely friendly and professional. The office is very clean and easy to find (next to Walmart).",
				img: 'ahmad.jpg',
				city: 'Chantilly, VA'
			}, 
			{
				name: 'Darnette P.',
				age: 47,
				text: "The staff is very pleasant and the visit I had was great I was treated with the utmost respect not like a number.  The Dr.  listen and went out her way to actually refer me to a specialist and called the specialist and set the appointment for me.  You will not find another Urgent Care that is as caring and passionate about there patients. Very clean. I highly recommend them and I will always continue to go there.",
				img: 'user_60_square.png',
				city: 'Leesburg, VA'
			}
		];
	}
}

export default MainController;
