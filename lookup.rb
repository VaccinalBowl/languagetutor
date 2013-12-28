# -*- coding: utf-8 -*-
require 'nokogiri'
require 'open-uri'



def getWikiHtml(word)
  wiki_uri = 'http://en.wiktionary.org/wiki/'
  encodedUri = URI.escape(wiki_uri+word)
  wikiFile = open(encodedUri)
  doc = Nokogiri::HTML(wikiFile);
end

def run 
  html = getWikiHtml("велосипед")
         
end


