"use client";

import MaxWidthWrapper from './layout/MaxWidthWrapper';
import SubHeading from './typography/SubHeading';
import Image from 'next/image';
import returnPolicy from '/public/policy/return.png';




const ReturnPolicy: React.FC = () => {




  return (
    <section className="py-10">
      <MaxWidthWrapper>
        <div>
          <SubHeading className="text-center font-bold text-gray-700 uppercase">
            Return Policy
          </SubHeading>

          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4">
            {/* Form Section */}
            <div>
            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>1.Introduction</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>

            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>2.General Terms</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>

            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>3.Changes and Cancellations</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>
            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>4.Approved Refunds</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>
            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>5.Evaluation of Refund Requests</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>
            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>6.  Refund Requests</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>
            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>7. Non-Refundable Services</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>
            </div>

            {/* Image Section */}
            <div>
              <Image
                src={returnPolicy}
                width={700}
                height={400}
                alt="return"
                className="h-[300px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ReturnPolicy;
