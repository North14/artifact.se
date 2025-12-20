FROM ruby:3.1

WORKDIR /usr/src/app
COPY . .

RUN bundle install
RUN bundle exec jekyll build

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--watch"]

