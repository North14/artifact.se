FROM ruby:3.4

RUN useradd -m -s /bin/bash jekyll

WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .
RUN chown -R jekyll:jekyll //usr/src/app
USER jekyll

RUN bundle exec jekyll build

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--watch"]

