import React from 'react';
function Prices() {
return (
<section id="prices">
<h2>Our Prices</h2>
<div className="prices-container">
<div className="prices-card">
<h3>Basic Site</h3>
<p>$99.99</p>
<ul>
<li>Maximum 2 pages</li>
<li>No special design requests</li>
</ul>
</div>
<div className="prices-card">
<h3>Premium Site</h3>
<p>$199.99</p>
<ul>
<li>Multiple pages</li>
<li>Back end included</li>
<li>Any special request</li>
</ul>
</div>
</div>
</section>
);
}
export default Prices;