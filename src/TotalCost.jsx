import React from 'react';
import "./TotalCost.css";

const TotalCost = ({ totalCosts, ItemsDisplay }) => {
    // Calculate total cost by summing all sections
    const totalAmount = totalCosts.venue + totalCosts.av + totalCosts.meals;

    return (
        <div className="pricing-app">
            <div className="display_box">
                <div className="header">
                    <p className="preheading"><h3>Total cost for the event</h3></p>
                </div>
                <div>
                    <h2 id="pre_fee_cost_display" className="price">
                        ${totalAmount}
                    </h2>
                    <div className="render_items">
                        <ItemsDisplay />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalCost;
