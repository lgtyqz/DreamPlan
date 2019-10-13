#!/usr/bin/ruby
require 'Nokogiri'
require 'open-uri'
require 'json'

def scrape link
    url = "http://www.washington.edu/students/crscat/" + link
    d = Nokogiri::HTML(open(url))
    f = d.xpath('/html/body/a')
    #f.each {|x| puts x}

end



doc = Nokogiri::HTML(open("http://www.washington.edu/students/crscat/"))
#courses = doc.xpath('//*[@id="uw-container-inner"]/div[2]/div/div[1]/ul[1]')
courses = doc.xpath('//*[@id="uw-container-inner"]/div[2]/div/div[1]/ul[1]/li/a')

results = []

def format(courses, results)
courses.each {|x|
t = scrape(x['href'])
if t.at_css('p')
#puts t.at_css('p').inner_html.strip.split('<br>')[1]
title = t.at_css('p').inner_html.strip.split('<br>')[0]
desc = t.at_css('p').inner_html.strip.split('<br>')[1]
#puts t.at_css('p').at_css('b').text
end
results.push(title: title,
description: desc)

}
end



format(courses, results)
courses = doc.xpath('//*[@id="uw-container-inner"]/div[2]/div/div[1]/ul[1]/li/ul/li/a')
format(courses, results)
puts JSON.pretty_generate(results)
#courses.each {|x| scrape x['href']}
