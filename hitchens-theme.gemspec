# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "hitchens-theme"
  spec.version       = "0.7.1"
  spec.authors       = ["Pat Dryburgh"]
  spec.email         = ["hello@patdryburgh.com"]

  spec.summary       = "An inarguably well-designed theme for Jekyll."
  spec.homepage      = "https://github.com/patdryburgh/hitchens"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
