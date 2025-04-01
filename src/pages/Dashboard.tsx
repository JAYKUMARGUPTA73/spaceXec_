
import { useState } from 'react';
import { 
  Home, User, FileText, DollarSign, Clock, Bell, LogOut, 
  Settings, BarChart2, PieChart, TrendingUp, Activity
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PropertyCard from '@/components/ui/PropertyCard';

// Sample user data
const userData = {
  name: "Rahul Sharma",
  email: "rahul.sharma@example.com",
  phone: "+91 98765 43210",
  joinedDate: "January 2022",
  totalInvestments: 3,
  totalInvested: 200000,
  totalReturns: 26000,
  portfolio: [
    {
      id: "1",
      title: "Luxury Apartment in South Delhi",
      location: "Green Park, Delhi",
      price: 15000000,
      yield: 14.5,
      minInvestment: 25000,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
      type: "Residential",
      area: 1250,
      investedAmount: 100000,
      ownership: 0.67,
      returns: 14500,
      purchaseDate: "March 15, 2022",
    },
    {
      id: "2",
      title: "Commercial Space in Cyber City",
      location: "Gurugram, Haryana",
      price: 27500000,
      yield: 16.2,
      minInvestment: 50000,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
      type: "Commercial",
      area: 2100,
      investedAmount: 75000,
      ownership: 0.27,
      returns: 12150,
      purchaseDate: "May 22, 2022",
    },
    {
      id: "5",
      title: "Vacation Home in Shimla",
      location: "Shimla, Himachal Pradesh",
      price: 12500000,
      yield: 13.2,
      minInvestment: 20000,
      image: "https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      type: "Vacation",
      area: 1650,
      investedAmount: 25000,
      ownership: 0.2,
      returns: 3300,
      purchaseDate: "October 10, 2022",
    },
  ],
  transactions: [
    {
      id: "t1",
      date: "March 15, 2022",
      amount: 100000,
      type: "investment",
      property: "Luxury Apartment in South Delhi",
    },
    {
      id: "t2",
      date: "April 15, 2022",
      amount: 1208,
      type: "return",
      property: "Luxury Apartment in South Delhi",
    },
    {
      id: "t3",
      date: "May 22, 2022",
      amount: 75000,
      type: "investment",
      property: "Commercial Space in Cyber City",
    },
    {
      id: "t4",
      date: "June 15, 2022",
      amount: 1208,
      type: "return",
      property: "Luxury Apartment in South Delhi",
    },
    {
      id: "t5",
      date: "June 22, 2022",
      amount: 1012,
      type: "return",
      property: "Commercial Space in Cyber City",
    },
    {
      id: "t6",
      date: "July 15, 2022",
      amount: 1208,
      type: "return",
      property: "Luxury Apartment in South Delhi",
    },
    {
      id: "t7",
      date: "July 22, 2022",
      amount: 1012,
      type: "return",
      property: "Commercial Space in Cyber City",
    },
    {
      id: "t8",
      date: "October 10, 2022",
      amount: 25000,
      type: "investment",
      property: "Vacation Home in Shimla",
    },
  ],
  notifications: [
    {
      id: "n1",
      date: "Today, 10:30 AM",
      message: "Monthly return of ₹1,208 credited to your account",
      read: false,
    },
    {
      id: "n2",
      date: "Yesterday, 3:45 PM",
      message: "Commercial Space in Cyber City has achieved 85% funding",
      read: false,
    },
    {
      id: "n3",
      date: "October 15, 2022",
      message: "New property listing matching your preferences is now available",
      read: true,
    },
    {
      id: "n4",
      date: "October 10, 2022",
      message: "Your investment in Vacation Home in Shimla has been confirmed",
      read: true,
    },
  ],
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="md:w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-medium text-gray-900">{userData.name}</h2>
                    <p className="text-xs text-gray-500">Customer</p>
                  </div>
                </div>
              </div>
              
              <nav className="p-2">
                <ul className="space-y-1">
                  <li>
                    <button 
                      onClick={() => setActiveTab('overview')}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                        activeTab === 'overview' 
                        ? 'bg-primary/10 text-primary font-medium' 
                        : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Home className="h-5 w-5" />
                      <span>Overview</span>
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('my-properties')}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                        activeTab === 'my-properties' 
                        ? 'bg-primary/10 text-primary font-medium' 
                        : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Home className="h-5 w-5" />
                      <span>My Properties</span>
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('transactions')}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                        activeTab === 'transactions' 
                        ? 'bg-primary/10 text-primary font-medium' 
                        : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <DollarSign className="h-5 w-5" />
                      <span>Transactions</span>
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('notifications')}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                        activeTab === 'notifications' 
                        ? 'bg-primary/10 text-primary font-medium' 
                        : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Bell className="h-5 w-5" />
                      <span>Notifications</span>
                      {userData.notifications.filter(n => !n.read).length > 0 && (
                        <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                          {userData.notifications.filter(n => !n.read).length}
                        </span>
                      )}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('profile')}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                        activeTab === 'profile' 
                        ? 'bg-primary/10 text-primary font-medium' 
                        : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <User className="h-5 w-5" />
                      <span>Profile</span>
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('support')}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                        activeTab === 'support' 
                        ? 'bg-primary/10 text-primary font-medium' 
                        : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <FileText className="h-5 w-5" />
                      <span>Support</span>
                    </button>
                  </li>
                </ul>
              </nav>
              
              <div className="p-4 border-t border-gray-100">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-gray-700"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </div>
          </aside>
          
          {/* Main Content */}
          <main className="flex-1">
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-fade-in">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Total Invested</CardDescription>
                      <CardTitle className="text-2xl">₹{userData.totalInvested.toLocaleString()}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        Across {userData.totalInvestments} properties
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Total Returns</CardDescription>
                      <CardTitle className="text-2xl">₹{userData.totalReturns.toLocaleString()}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-green-600 flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {((userData.totalReturns / userData.totalInvested) * 100).toFixed(2)}% on investment
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Current Portfolio Value</CardDescription>
                      <CardTitle className="text-2xl">₹{(userData.totalInvested + userData.totalReturns).toLocaleString()}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        Updated as of today
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Portfolio Allocation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80 flex items-center justify-center">
                        <PieChart className="h-40 w-40 text-gray-300" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Returns History</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80 flex items-center justify-center">
                        <BarChart2 className="h-40 w-40 text-gray-300" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="mr-2 h-5 w-5" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userData.transactions.slice(0, 5).map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between border-b border-gray-100 pb-2">
                          <div className="flex items-start space-x-3">
                            <div className={`mt-1 h-8 w-8 rounded-full flex items-center justify-center ${
                              transaction.type === 'investment' 
                                ? 'bg-blue-100' 
                                : 'bg-green-100'
                            }`}>
                              {transaction.type === 'investment' ? (
                                <TrendingUp className={`h-4 w-4 text-blue-600`} />
                              ) : (
                                <DollarSign className={`h-4 w-4 text-green-600`} />
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">
                                {transaction.type === 'investment' ? 'Invested in' : 'Return from'} {transaction.property}
                              </p>
                              <p className="text-xs text-gray-500">
                                {transaction.date}
                              </p>
                            </div>
                          </div>
                          <div className={`text-sm font-medium ${
                            transaction.type === 'investment' 
                              ? 'text-gray-900' 
                              : 'text-green-600'
                          }`}>
                            {transaction.type === 'investment' ? '-' : '+'} ₹{transaction.amount.toLocaleString()}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-center">
                      <Button variant="ghost" size="sm" className="text-primary" onClick={() => setActiveTab('transactions')}>
                        View All Transactions
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {activeTab === 'my-properties' && (
              <div className="space-y-8 animate-fade-in">
                <h1 className="text-2xl font-bold text-gray-900">My Properties</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userData.portfolio.map((property) => (
                    <div key={property.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={property.image} 
                          alt={property.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-gray-900">{property.title}</h3>
                        <p className="text-sm text-gray-500">{property.location}</p>
                        
                        <div className="mt-4 grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-gray-500">Invested Amount</p>
                            <p className="font-medium">₹{property.investedAmount.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Ownership</p>
                            <p className="font-medium">{property.ownership.toFixed(2)}%</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Returns Earned</p>
                            <p className="font-medium text-green-600">₹{property.returns.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Purchase Date</p>
                            <p className="font-medium">{property.purchaseDate}</p>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <Button variant="outline" size="sm" className="w-full">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'transactions' && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      Export
                    </Button>
                  </div>
                </div>
                
                <Card>
                  <CardContent className="p-0">
                    <div className="rounded-lg border border-gray-200 overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Description
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Amount
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {userData.transactions.map((transaction) => (
                            <tr key={transaction.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {transaction.date}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {transaction.type === 'investment' ? 'Investment in' : 'Return from'} {transaction.property}
                              </td>
                              <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                                transaction.type === 'investment' 
                                  ? 'text-gray-900' 
                                  : 'text-green-600'
                              }`}>
                                {transaction.type === 'investment' ? '-' : '+'} ₹{transaction.amount.toLocaleString()}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  Completed
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {activeTab === 'notifications' && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
                  <Button variant="ghost" size="sm">
                    Mark all as read
                  </Button>
                </div>
                
                <Card>
                  <CardContent className="p-0">
                    <div className="divide-y divide-gray-100">
                      {userData.notifications.map((notification) => (
                        <div 
                          key={notification.id} 
                          className={`flex items-start p-4 ${
                            notification.read ? 'bg-white' : 'bg-blue-50'
                          }`}
                        >
                          <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                            notification.read ? 'bg-gray-100' : 'bg-blue-100'
                          } mr-3`}>
                            <Bell className={`h-5 w-5 ${
                              notification.read ? 'text-gray-500' : 'text-blue-500'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <p className={`text-sm ${
                              notification.read ? 'text-gray-600' : 'text-gray-900 font-medium'
                            }`}>
                              {notification.message}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {notification.date}
                            </p>
                          </div>
                          {!notification.read && (
                            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {activeTab === 'profile' && (
              <div className="space-y-8 animate-fade-in">
                <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your account information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            value={userData.name}
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={userData.email}
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            value={userData.phone}
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                            Address
                          </label>
                          <input
                            type="text"
                            id="address"
                            placeholder="Enter your address"
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                          />
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button>Save Changes</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>Manage how you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">Email Notifications</p>
                          <p className="text-sm text-gray-500">Receive updates on your investments via email</p>
                        </div>
                        <div className="h-6 w-11 rounded-full bg-primary flex items-center p-1">
                          <div className="h-4 w-4 rounded-full bg-white transform translate-x-5"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">SMS Notifications</p>
                          <p className="text-sm text-gray-500">Receive updates on your investments via SMS</p>
                        </div>
                        <div className="h-6 w-11 rounded-full bg-primary flex items-center p-1">
                          <div className="h-4 w-4 rounded-full bg-white transform translate-x-5"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">New Property Alerts</p>
                          <p className="text-sm text-gray-500">Get notified when new properties matching your criteria are listed</p>
                        </div>
                        <div className="h-6 w-11 rounded-full bg-gray-200 flex items-center p-1">
                          <div className="h-4 w-4 rounded-full bg-white"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                    <CardDescription>Update your password to keep your account secure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">
                          Current Password
                        </label>
                        <input
                          type="password"
                          id="current-password"
                          placeholder="Enter your current password"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
                          New Password
                        </label>
                        <input
                          type="password"
                          id="new-password"
                          placeholder="Enter your new password"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="confirm-password"
                          placeholder="Confirm your new password"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        />
                      </div>
                      
                      <div className="pt-4">
                        <Button>Update Password</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {activeTab === 'support' && (
              <div className="space-y-8 animate-fade-in">
                <h1 className="text-2xl font-bold text-gray-900">Support</h1>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Create Support Ticket</CardTitle>
                    <CardDescription>We're here to help. Let us know what's on your mind.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          placeholder="Enter the subject of your inquiry"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                          Category
                        </label>
                        <select
                          id="category"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        >
                          <option>General Inquiry</option>
                          <option>Technical Support</option>
                          <option>Billing Issue</option>
                          <option>Investment Support</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          placeholder="Please describe your issue in detail"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        ></textarea>
                      </div>
                      <div>
                        <label htmlFor="attachment" className="block text-sm font-medium text-gray-700 mb-1">
                          Attachment (optional)
                        </label>
                        <input
                          type="file"
                          id="attachment"
                          className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                        />
                      </div>
                      
                      <div className="pt-4">
                        <Button>Submit Ticket</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Previous Tickets</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-6">
                      <FileText className="h-12 w-12 text-gray-300 mx-auto" />
                      <p className="mt-2 text-gray-500">You don't have any support tickets yet</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
