import React, { useState } from 'react';
import { Home, Zap, Clock, Copy, CheckCircle, Sparkles, MapPin, Bed, Bath, Square, DollarSign } from 'lucide-react';

const PropListAIDemo = () => {
  const [propertyData, setPropertyData] = useState({
    address: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    sqft: '',
    propertyType: 'house',
    features: '',
    style: 'professional'
  });
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedListings, setGeneratedListings] = useState(null);
  const [copiedPlatform, setCopiedPlatform] = useState(null);

  const propertyTypes = [
    { value: 'house', label: 'Single Family House' },
    { value: 'condo', label: 'Condominium' },
    { value: 'townhouse', label: 'Townhouse' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'land', label: 'Land/Lot' }
  ];

  const writingStyles = [
    { value: 'professional', label: 'Professional & Formal' },
    { value: 'luxury', label: 'Luxury & Sophisticated' },
    { value: 'friendly', label: 'Warm & Friendly' },
    { value: 'modern', label: 'Modern & Trendy' }
  ];

  const platforms = [
    { name: 'MLS', color: 'bg-blue-600', description: 'Multiple Listing Service - Professional format' },
    { name: 'Zillow', color: 'bg-purple-600', description: 'Consumer-friendly with key highlights' },
    { name: 'Social Media', color: 'bg-pink-600', description: 'Engaging copy for Facebook/Instagram' }
  ];

  // Mock AI-generated listings
  const generateListings = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const mockListings = {
        MLS: `${propertyData.propertyType === 'house' ? 'Stunning Single Family Home' : 'Beautiful Property'} - ${propertyData.address}

This exceptional ${propertyData.bedrooms || '3'}-bedroom, ${propertyData.bathrooms || '2'}-bathroom ${propertyData.propertyType} offers ${propertyData.sqft || '2,150'} square feet of thoughtfully designed living space. Located in a desirable neighborhood, this property combines comfort with convenience.

Key Features:
• Spacious floor plan with excellent flow
• Updated kitchen with modern appliances
• Master suite with en-suite bathroom
• Private outdoor space perfect for relaxation
• Convenient location near schools and shopping
${propertyData.features ? `• ${propertyData.features}` : '• Garage parking and storage'}

Priced competitively at $${propertyData.price || '450,000'}, this property represents excellent value in today's market. Schedule your showing today to experience all this home has to offer.

Property Details:
- Bedrooms: ${propertyData.bedrooms || '3'}
- Bathrooms: ${propertyData.bathrooms || '2'}
- Square Footage: ${propertyData.sqft || '2,150'} sq ft
- Property Type: ${propertyData.propertyType}
- Listing Price: $${propertyData.price || '450,000'}`,

        Zillow: `🏡 Your Dream Home Awaits at ${propertyData.address}!

Looking for the perfect ${propertyData.propertyType}? This gorgeous ${propertyData.bedrooms || '3'}-bed, ${propertyData.bathrooms || '2'}-bath home checks all the boxes! With ${propertyData.sqft || '2,150'} sq ft of living space, you'll have room for everything you love.

✨ What Makes This Special:
→ Open-concept living that's perfect for entertaining
→ Chef-inspired kitchen with premium finishes  
→ Relaxing master retreat with spa-like bathroom
→ Outdoor space for barbecues and morning coffee
→ Prime location near top-rated schools
${propertyData.features ? `→ ${propertyData.features}` : '→ 2-car garage with extra storage'}

💰 Priced to Move: $${propertyData.price || '450,000'}

This one won't last long! Homes in this area sell fast, and at this price point, you'll want to see it ASAP. Ready to fall in love?

📱 Schedule your tour today - this could be THE ONE! 🔑`,

        'Social Media': `🚨 JUST LISTED! 🚨

Who's ready to fall in love? 😍 This absolutely STUNNING ${propertyData.bedrooms || '3'}-bedroom home at ${propertyData.address} is everything you've been searching for!

✨ The highlights that'll make you swoon:
🏠 ${propertyData.sqft || '2,150'} sq ft of pure perfection
🍳 Kitchen that'll make you want to cook every night
🛁 Master suite that feels like a luxury hotel
🌳 Outdoor space for all your hosting dreams
🎯 Location that puts you close to everything

💸 At $${propertyData.price || '450,000'}, this is the deal of the century!

Tag someone who NEEDS to see this! 👇
Drop a 🔥 if you want a private tour!

#JustListed #DreamHome #RealEstate #NewListing #HomeSweetHome #PropertyGoals #OpenHouse #YourNextHome`
      };

      setGeneratedListings(mockListings);
      setIsGenerating(false);
    }, 3000);
  };

  const copyToClipboard = async (text, platform) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPlatform(platform);
      setTimeout(() => setCopiedPlatform(null), 2000);
    } catch (err) {
      console.error('Failed to copy text');
    }
  };

  const handleInputChange = (field, value) => {
    setPropertyData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                <Home className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">PropListAI</h1>
                <p className="text-sm text-gray-600">AI-Powered Real Estate Listing Generator</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
              <Clock className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-700">Save 40+ Minutes Per Listing</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg border">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-500" />
                Property Details
              </h2>
              <p className="text-gray-600 text-sm mt-1">Fill in the details and let AI create perfect listings</p>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Property Address *
                </label>
                <input
                  type="text"
                  placeholder="123 Main Street, Anytown, ST 12345"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={propertyData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <DollarSign className="w-4 h-4 inline mr-1" />
                    Price
                  </label>
                  <input
                    type="text"
                    placeholder="450,000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={propertyData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Square className="w-4 h-4 inline mr-1" />
                    Square Feet
                  </label>
                  <input
                    type="text"
                    placeholder="2,150"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={propertyData.sqft}
                    onChange={(e) => handleInputChange('sqft', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Bed className="w-4 h-4 inline mr-1" />
                    Bedrooms
                  </label>
                  <input
                    type="number"
                    placeholder="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={propertyData.bedrooms}
                    onChange={(e) => handleInputChange('bedrooms', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Bath className="w-4 h-4 inline mr-1" />
                    Bathrooms
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    placeholder="2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={propertyData.bathrooms}
                    onChange={(e) => handleInputChange('bathrooms', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={propertyData.propertyType}
                    onChange={(e) => handleInputChange('propertyType', e.target.value)}
                  >
                    {propertyTypes.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Features</label>
                <textarea
                  placeholder="Pool, updated kitchen, hardwood floors, etc."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={propertyData.features}
                  onChange={(e) => handleInputChange('features', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Writing Style</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={propertyData.style}
                  onChange={(e) => handleInputChange('style', e.target.value)}
                >
                  {writingStyles.map(style => (
                    <option key={style.value} value={style.value}>{style.label}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={generateListings}
                disabled={!propertyData.address || isGenerating}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                    Generating AI Listings...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Generate Listings with AI
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Generated Listings */}
          <div className="bg-white rounded-xl shadow-lg border">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Copy className="w-5 h-5 text-green-500" />
                Generated Listings
              </h2>
              <p className="text-gray-600 text-sm mt-1">AI-optimized for different platforms</p>
            </div>

            <div className="p-6">
              {!generatedListings ? (
                <div className="text-center py-12">
                  <Home className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">Enter property details and generate listings to see AI-powered results</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {platforms.map((platform) => (
                    <div key={platform.name} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className={`${platform.color} px-4 py-3 flex items-center justify-between`}>
                        <div>
                          <h3 className="text-white font-semibold">{platform.name}</h3>
                          <p className="text-white/80 text-sm">{platform.description}</p>
                        </div>
                        <button
                          onClick={() => copyToClipboard(generatedListings[platform.name], platform.name)}
                          className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-md flex items-center gap-2 transition-colors"
                        >
                          {copiedPlatform === platform.name ? (
                            <>
                              <CheckCircle className="w-4 h-4" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                      <div className="p-4 bg-gray-50">
                        <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans leading-relaxed">
                          {generatedListings[platform.name]}
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Why PropListAI?</h3>
            <p className="text-blue-100">Transform your listing workflow with AI-powered efficiency</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white/20 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">Save 40+ Minutes</h4>
              <p className="text-blue-100 text-sm">Generate professional listings in seconds instead of spending hours writing</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">Platform Optimized</h4>
              <p className="text-blue-100 text-sm">Tailored copy for MLS, Zillow, and social media with perfect formatting</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">AI-Powered</h4>
              <p className="text-blue-100 text-sm">Google Gemini AI creates compelling, professional descriptions that sell</p>
            </div>
          </div>
        </div>

        {/* Demo Notice */}
        <div className="mt-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-500 p-2 rounded-lg">
              <Home className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">This is a Demo</h3>
          </div>
          <p className="text-gray-700 mb-4">
            PropListAI uses advanced AI to generate professional real estate listings optimized for different platforms. 
            The full version includes additional writing styles, market analysis integration, and bulk generation features.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-600/20 text-purple-700 rounded-full text-sm">Google Gemini AI</span>
            <span className="px-3 py-1 bg-blue-600/20 text-blue-700 rounded-full text-sm">Platform Optimization</span>
            <span className="px-3 py-1 bg-green-600/20 text-green-700 rounded-full text-sm">Instant Copy</span>
            <span className="px-3 py-1 bg-yellow-600/20 text-yellow-700 rounded-full text-sm">300-500 Words</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropListAIDemo;