#!/usr/bin/env node

/**
 * Script to view form submissions from the command line
 * Usage: node scripts/view-submissions.js [newsletter|contact]
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const newsletterFile = path.join(dataDir, 'newsletter-subscribers.json');
const contactFile = path.join(dataDir, 'contact-submissions.json');

function readJsonFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    return [];
  }
}

function displayNewsletter() {
  console.log('\n📧 NEWSLETTER SUBSCRIBERS\n');
  const subscribers = readJsonFile(newsletterFile);
  
  if (subscribers.length === 0) {
    console.log('No subscribers yet.');
    return;
  }
  
  console.log(`Total subscribers: ${subscribers.length}\n`);
  
  subscribers.forEach((sub, index) => {
    console.log(`${index + 1}. ${sub.email}`);
    console.log(`   Subscribed: ${new Date(sub.subscribedAt).toLocaleString()}`);
    console.log(`   Source: ${sub.source}`);
    console.log('');
  });
}

function displayContacts() {
  console.log('\n📬 CONTACT FORM SUBMISSIONS\n');
  const submissions = readJsonFile(contactFile);
  
  if (submissions.length === 0) {
    console.log('No contact submissions yet.');
    return;
  }
  
  const newCount = submissions.filter(s => s.status === 'new').length;
  console.log(`Total submissions: ${submissions.length} (${newCount} new)\n`);
  
  submissions.forEach((submission, index) => {
    const statusEmoji = submission.status === 'new' ? '🆕' : 
                       submission.status === 'read' ? '👁️' : '✅';
    
    console.log(`${index + 1}. ${statusEmoji} ${submission.subject}`);
    console.log(`   From: ${submission.name} <${submission.email}>`);
    console.log(`   Date: ${new Date(submission.submittedAt).toLocaleString()}`);
    console.log(`   Message: ${submission.message.substring(0, 100)}${submission.message.length > 100 ? '...' : ''}`);
    console.log(`   ID: ${submission.id}`);
    console.log('');
  });
}

function displayAll() {
  displayNewsletter();
  console.log('\n' + '='.repeat(60) + '\n');
  displayContacts();
}

// Main execution
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'newsletter':
    displayNewsletter();
    break;
  case 'contact':
    displayContacts();
    break;
  default:
    displayAll();
}