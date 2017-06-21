import React, { Component } from 'react';
import { Link } from 'react-router';

const About = () => (
<div className="aboutcontainer">
    	<div id="header-and-title">
		<img id="header-image" src="assets/images/topimg.png" alt="Winnie walking" width="100%"/>

		<h1 id="main-title">About</h1>
	</div>
	<div className="wrapper">
		<div className="info">
			<h2>About</h2>
			<p>Winnie-the-Pooh, also called Pooh Bear, is a fictional anthropomorphic teddy bear created by English author A. A. Milne.
				The first collection of stories about the character was the book Winnie-the-Pooh (1926), and this was followed by The
				House at Pooh Corner (1928). Milne also included a poem about the bear in the children's verse book When We Were Very
				Young (1924) and many more in Now We Are Six (1927). All four volumes were illustrated by E. H. Shepard. </p>
		</div>
		<div className="info">
			<h2>History</h2>
			<p>A. A. Milne named the character Winnie-the-Pooh for a teddy bear owned by his son, Christopher Robin Milne, who was the
				basis for the character Christopher Robin. The rest of Christopher Robin Milne's toys, Piglet, Eeyore, Kanga, Roo and
				Tigger, were incorporated into Milne's stories.Two more characters, Owl and Rabbit, were created by Milne's imagination,
				while Gopher was added to the Disney version. Christopher Robin's toy bear is on display at the Main Branch of the New
				York Public Library in New York City.</p>
		</div>
		<div className="info">
			<h2>Disney</h2>
			<p>After Slesinger's death in 1953, his wife, Shirley Slesinger Lasswell, continued developing the character herself. In
				1961, she licensed rights to Walt Disney Productions in exchange for royalties in the first of two agreements between
				Stephen Slesinger, Inc. and Disney. The same year, A. A. Milne's widow, Daphne Milne, also licensed certain rights, including
				motion picture rights, to Disney.</p>
		</div>
		<div className="info">
			<h2>Adaptations</h2>
			<p>Winnie-the-Pooh at the Guild Theater | Sue Hastings Marionettes, 1931 <br/><br/> Winnie-the-Pooh, a play in three acts |
				Dramatized by Kristin Sergel, Dramatic Publishing Company, 1957 <br/><br/> Winnie-the-Pooh, a musical comedy in two acts
				| Lyrics by A. A. Milne and Kristin Sergel, Music by Allan Jay Friedman, Book by Kristin Sergel, Dramatic Publishing
				Company, 1964 <br/><br/> A Winnie-the-Pooh Christmas Tail, In Which Winnie-the-Pooh and His Friends Help Eeyore Have a
				Very Merry Christmas (Or a Very Happy Birthday.) | Book, Music and Lyrics by James W. Rogers, Dramatic Publishing Company,
				1977 <br/><br/> "Bother! The Brain of Pooh" | Peter Dennis, 1986 <br/><br/> Winnie-the-Pooh, small cast musical version |
				Dramatized by le Clanché du Rand, Music by Allan Jay Friedman, Lyrics by A. A. Milne and Kristin Sergel, Additional Lyrics
				by le Clanché du Rand, Dramatic Publishing Company, 1992</p>
		</div>
	</div>
</div>
);

export default About;