#!/usr/bin/ruby
# Microsoft sample code
# encoding: UTF-8

require 'net/https'
require 'uri'
require 'json'

key_var="key_var"
if (!ENV[key_var])
    raise "Please set/export the following environment variable: " + key_var
else
    subscription_key = ENV[key_var]
end

endpoint_var="endpoint_var"
if (!ENV[endpoint_var])
    raise "Please set/export the following environment variable: " + endpoint_var
else
    endpoint = ENV[endpoint_var]
end

path = '/text/analytics/v2.1/keyPhrases'

uri = URI(endpoint + path)
#sample text
documents = { 'documents': [
    { 'id' => '1', 'language' => 'en', 'text' => 'Having recently finished a 2-year contract in software development after completing my Bachelor of Science in Computer Science, I am ready to start the next chapter in my life. So, I was thrilled when I came across your job post in search of IT candidates in software engineering. With both my educational and professional background in the entire software dev life cycle, I believe I have what it takes to be the perfect choice for Cyber Science Tech.'
},
    { 'id' => '2', 'language' => 'es', 'text' => 'Si usted quiere comunicarse con Carlos, usted debe de llamarlo a su telefono movil. Carlos es muy responsable, pero necesita recibir una notificacion si hay algun problema.' },
    { 'id' => '3', 'language' => 'en', 'text' => 'The Grand Hotel is a new hotel in the center of Seattle. It earned 5 stars in my review, and has the classiest decor I\'ve ever seen.' },
]}

puts 'Please wait a moment for the results to appear.'

request = Net::HTTP::Post.new(uri)
request['Content-Type'] = "application/json"
request['Ocp-Apim-Subscription-Key'] = subscription_key
request.body = documents.to_json

response = Net::HTTP.start(uri.host, uri.port, :use_ssl => uri.scheme == 'https') do |http|
    http.request (request)
end

puts JSON::pretty_generate (JSON (response.body))
