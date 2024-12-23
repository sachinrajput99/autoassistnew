import FreePlanCard from './sections/moreComponent/FreePlanCard.jsx';
import PricingCard from './sections/moreComponent/PricingCard.jsx';
import PlanComparisonTable from './sections/moreComponent/PlanComparisonTable.jsx';
import CustomizedCard from './sections/moreComponent/CustomizedCard.jsx';

const PricingPage = () => {
  return (
    <div>
      {' '}
      <div className="mb-10">
        {' '}
        <h1 className="text-white text-5xl font-semibold text-center mb-10 text-gradient ">Pricing</h1>
        <div className="flex gap-7  flex-col sm:flex-row">
          <FreePlanCard />
          <PricingCard />
          <CustomizedCard/>
        </div>
      </div>
      <PlanComparisonTable />
    </div>
  );
};

export default PricingPage;
