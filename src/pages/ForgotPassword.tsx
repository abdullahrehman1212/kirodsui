import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle,
  Shield,
  Clock,
  Zap,
  RefreshCw
} from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    // Clear error when user starts typing
    if (errors.email) {
      setErrors({});
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsLoading(true);
    
    // Simulate password reset process
    setTimeout(() => {
      setIsLoading(false);
      setIsEmailSent(true);
    }, 2000);
  };

  const handleResendEmail = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Reset email sent again! (This is a demo)');
    }, 1500);
  };

  const securityFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Secure Process',
      description: 'Bank-level security for password reset'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Quick Recovery',
      description: 'Reset link expires in 15 minutes'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Email Verification',
      description: 'Sent only to verified email addresses'
    }
  ];

  if (isEmailSent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background-green via-white to-accent-green/20 pt-16">
        <div className="flex min-h-screen">
          {/* Left Side - Success Message */}
          <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 text-center">
              {/* Success Icon */}
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-main-green rounded-full">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
              </div>

              {/* Success Message */}
              <div>
                <h2 className="text-3xl font-bold text-text-dark mb-4">
                  Check your email
                </h2>
                <p className="text-gray-600 mb-6">
                  We've sent a password reset link to{' '}
                  <span className="font-medium text-main-green">{email}</span>
                </p>
                <div className="bg-background-green p-4 rounded-lg mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>Didn't receive the email?</strong> Check your spam folder or try again.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleResendEmail}
                  disabled={isLoading}
                  className="w-full flex justify-center items-center py-3 px-4 border border-main-green rounded-lg shadow-sm text-sm font-medium text-main-green bg-white hover:bg-background-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-green transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-main-green"></div>
                  ) : (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Resend email
                    </>
                  )}
                </button>

                <Link
                  to="/login"
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-main-green hover:bg-secondary-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-green transition-all duration-300"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to sign in
                </Link>
              </div>

              {/* Help Text */}
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Still having trouble?{' '}
                  <Link
                    to="/contact"
                    className="font-medium text-main-green hover:text-secondary-green transition-colors duration-300"
                  >
                    Contact support
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Security Info */}
          <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-main-green via-secondary-green to-accent-green">
            <div className="flex flex-col justify-center px-12 py-12 text-white">
              <div className="max-w-md">
                <h3 className="text-3xl font-bold mb-6">
                  Your security is our priority
                </h3>
                <p className="text-green-100 mb-8 text-lg">
                  We use industry-standard security measures to protect your account and ensure safe password recovery.
                </p>

                <div className="space-y-6">
                  {securityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-2 bg-white/20 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-green-100 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">SSL encrypted communication</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">24/7 security monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-green via-white to-accent-green/20 pt-16">
      <div className="flex min-h-screen">
        {/* Left Side - Reset Form */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            {/* Header */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 bg-main-green rounded-xl">
                  <Zap className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-text-dark mb-2">
                Forgot your password?
              </h2>
              <p className="text-gray-600">
                No worries! Enter your email and we'll send you reset instructions.
              </p>
            </div>

            {/* Reset Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-main-green focus:border-transparent transition-colors duration-300 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email address"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-main-green hover:bg-secondary-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-green transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    Send reset instructions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            {/* Back to Login */}
            <div className="text-center">
              <Link
                to="/login"
                className="inline-flex items-center text-sm font-medium text-main-green hover:text-secondary-green transition-colors duration-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to sign in
              </Link>
            </div>

            {/* Help Section */}
            <div className="bg-background-green p-6 rounded-xl">
              <h3 className="font-semibold text-text-dark mb-2">Need help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                If you're having trouble accessing your account, our support team is here to help.
              </p>
              <Link
                to="/contact"
                className="text-sm font-medium text-main-green hover:text-secondary-green transition-colors duration-300"
              >
                Contact support →
              </Link>
            </div>

            {/* Security Note */}
            <div className="text-center">
              <p className="text-xs text-gray-500">
                For security reasons, we'll only send reset instructions to verified email addresses.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Security Features */}
        <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-main-green via-secondary-green to-accent-green">
          <div className="flex flex-col justify-center px-12 py-12 text-white">
            <div className="max-w-md">
              <h3 className="text-3xl font-bold mb-6">
                Secure password recovery
              </h3>
              <p className="text-green-100 mb-8 text-lg">
                We take your account security seriously. Our password reset process is designed to keep your account safe.
              </p>

              <div className="space-y-6">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-white/20 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-green-100 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <h4 className="font-semibold mb-3">How it works:</h4>
                <div className="space-y-2 text-sm text-green-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    <span>Enter your email address</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    <span>Check your email for reset link</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    <span>Create a new secure password</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;