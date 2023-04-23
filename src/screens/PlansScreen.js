import React from "react";
import { useHistory } from "react-router-dom";
import "./PlansScreen.css";

function PlansScreen() {
  const history = useHistory();
  const dummy_Subscription = [
    {
      id: "s1",
      plan: "Basic Plan",
      clearity: "720p",
    },
    {
      id: "s2",
      plan: "Standard Plan",
      clearity: "1080p",
    },
    {
      id: "s3",
      plan: "Premium Plan",
      clearity: "4K + HDR",
    },
  ];
  return (
    <div>
      {dummy_Subscription.map((plans) => (
        <div key={plans.id}>
          <div className="plansScreen__plan">
            <div>
              <div>{plans.plan}</div>
              <div>{plans.clearity}</div>
            </div>
            <button
              className="plansScreen__plan__button"
              onClick={() => history.push("/")}
            >
              Subscribe
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlansScreen;
